window.onload = function onLoad() {
    var gifts = [
        "Ju lutem provoni perseri neser!",
        "20 sms nderkombetare",
        "100M internet"
    ];

    var circle = new ProgressBar.Circle('#progress', {
        strokeWidth: 4,
        color: '#FCB03C',
        duration: 200,
        easing: 'linear'
    });
    
    var progress = 0;
    var active = true;
    var removeProgressInterval;
    
    // logic for shake
    var shakeBtn = document.getElementById("shakebtn");
    shakeBtn.onclick = function() {
        if(!removeProgressInterval) {
            removeProgressInterval = createRemoveProgressInterval();
        }
        
        active = true;
        
        if (progress < 1) {
            progress = (parseFloat(progress) + parseFloat(0.05)).toFixed(2);
            circle.animate(progress);
        }
        
        if (progress == 1.00) {
            var resultDiv = document.querySelector(".result");
            document.querySelector(".game").classList.remove("visible");
            clearInterval(removeProgressInterval);
            removeProgressInterval = null;

            resultDiv.textContent = gifts[Math.floor(Math.random() * gifts.length)];
            resultDiv.classList.add("visible");
        }
        
    }
    
    function createRemoveProgressInterval() {
        return setInterval(function() {
            console.log('remove');
            if (active) {
                active = false;
                return;
            }
            
            if (progress > 0) {
                progress = (parseFloat(progress) - parseFloat(0.05)).toFixed(2);
                circle.animate(progress);
            }

            if (progress == 0.00) {
                clearInterval(removeProgressInterval);
                removeProgressInterval = null;
            }
        }, 200);
    }
    
};