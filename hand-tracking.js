// Hand Tracking for Interactive Star Animation
// Uses TensorFlow.js HandPose model to detect hand movements and scale stars

let handPoseModel = null;
let video = null;
let isTracking = false;
let lastHandDistance = 0;
let starScaleFactor = 1;

// Initialize hand tracking
async function initHandTracking() {
    try {
        // Load the HandPose model
        handPoseModel = await handpose.load();
        console.log('HandPose model loaded');
        
        // Setup video element for webcam
        video = document.createElement('video');
        video.width = 640;
        video.height = 480;
        video.style.display = 'none';
        document.body.appendChild(video);
        
        // Request webcam access
        const stream = await navigator.mediaDevices.getUserMedia({
            video: { width: 640, height: 480 }
        });
        
        video.srcObject = stream;
        video.play();
        
        isTracking = true;
        console.log('Hand tracking initialized');
        
        // Start detection loop
        detectHands();
        
        return true;
    } catch (error) {
        console.error('Failed to initialize hand tracking:', error);
        return false;
    }
}

// Detect hands and update star scale
async function detectHands() {
    if (!isTracking || !handPoseModel || !video) {
        return;
    }
    
    try {
        // Detect hands in the video frame
        const predictions = await handPoseModel.estimateHands(video);
        
        if (predictions.length > 0) {
            // Get the first detected hand
            const hand = predictions[0];
            
            // Calculate hand distance from camera based on hand size
            // Larger bounding box = closer to camera
            const landmarks = hand.landmarks;
            
            // Calculate distance between wrist (0) and middle finger tip (12)
            const wrist = landmarks[0];
            const middleTip = landmarks[12];
            
            const handSize = Math.sqrt(
                Math.pow(middleTip[0] - wrist[0], 2) +
                Math.pow(middleTip[1] - wrist[1], 2)
            );
            
            // Normalize hand size to scale factor (0.5 to 2.0)
            // Larger hand size (closer) = larger stars
            const minSize = 50;
            const maxSize = 200;
            const normalizedSize = Math.max(minSize, Math.min(maxSize, handSize));
            starScaleFactor = 0.5 + ((normalizedSize - minSize) / (maxSize - minSize)) * 1.5;
            
            // Smooth the transition
            lastHandDistance = lastHandDistance * 0.8 + starScaleFactor * 0.2;
            
            // Update star scales
            updateStarScales(lastHandDistance);
        } else {
            // Gradually return to normal size when no hand detected
            lastHandDistance = lastHandDistance * 0.95 + 1.0 * 0.05;
            updateStarScales(lastHandDistance);
        }
    } catch (error) {
        console.error('Hand detection error:', error);
    }
    
    // Continue detection loop
    requestAnimationFrame(detectHands);
}

// Update the scale of all stars using CSS custom property
function updateStarScales(scale) {
    document.documentElement.style.setProperty('--star-scale', scale);
}

// Toggle hand tracking on/off
function toggleHandTracking() {
    if (!isTracking) {
        initHandTracking();
    } else {
        stopHandTracking();
    }
}

// Stop hand tracking
function stopHandTracking() {
    isTracking = false;
    
    if (video && video.srcObject) {
        const tracks = video.srcObject.getTracks();
        tracks.forEach(track => track.stop());
        video.srcObject = null;
    }
    
    // Reset star scales
    updateStarScales(1);
    
    console.log('Hand tracking stopped');
}

// Auto-initialize when page loads
window.addEventListener('load', () => {
    // Add bottom corner star clusters to all selection sections
    const selectionSections = document.querySelectorAll('.selection-section');
    selectionSections.forEach(section => {
        // Bottom left cluster
        const bottomLeft = document.createElement('span');
        bottomLeft.className = 'star-cluster-bottom-left';
        bottomLeft.textContent = '⭐⭐⭐';
        section.appendChild(bottomLeft);
        
        // Bottom right cluster
        const bottomRight = document.createElement('span');
        bottomRight.className = 'star-cluster-bottom-right';
        bottomRight.textContent = '⭐⭐⭐';
        section.appendChild(bottomRight);
    });
    
    // Add a small button to toggle hand tracking
    const toggleButton = document.createElement('button');
    toggleButton.id = 'hand-tracking-toggle';
    toggleButton.innerHTML = '📷 Enable Hand Tracking';
    toggleButton.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        padding: 12px 20px;
        background: linear-gradient(135deg, #6c63ff 0%, #5a52d4 100%);
        color: white;
        border: none;
        border-radius: 25px;
        cursor: pointer;
        font-size: 0.9rem;
        font-weight: 600;
        box-shadow: 0 4px 15px rgba(108, 99, 255, 0.3);
        z-index: 1000;
        transition: all 0.3s ease;
    `;
    
    toggleButton.addEventListener('click', async () => {
        if (!isTracking) {
            const success = await initHandTracking();
            if (success) {
                toggleButton.innerHTML = '📷 Disable Hand Tracking';
                toggleButton.style.background = 'linear-gradient(135deg, #ff6b6b 0%, #c92a2a 100%)';
            }
        } else {
            stopHandTracking();
            toggleButton.innerHTML = '📷 Enable Hand Tracking';
            toggleButton.style.background = 'linear-gradient(135deg, #6c63ff 0%, #5a52d4 100%)';
        }
    });
    
    document.body.appendChild(toggleButton);
});
