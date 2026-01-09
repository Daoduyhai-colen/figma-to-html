const sadLines = [
    "Hành trình tìm lại ký ức...",
    "Vòng lặp nỗi nhớ bắt đầu chạy.",
    "Nếu tình yêu này không có thật,",
    "Hệ thống sẽ lập tức dừng lại.",
    "Nhưng trớ trêu thay...",
    "Lệnh nhớ_em() vẫn thực thi mỗi giây.",
    " ",
    "// Lỗi: Mất kết nối thực tại",
    "Đang tải lại hình bóng cô ấy...",
    "Xóa bỏ những nỗi đau hiện tại.",
    "Đã tìm thấy Bạch Nguyệt Quang."
];

const btnPlay = document.getElementById('btnPlay');
const video = document.getElementById('myVideo');
const screen = document.getElementById('mainScreen');
const codeRain = document.getElementById('codeRain');
const errorCode = document.getElementById('errorCode');
const subtext = document.getElementById('subtext');
const systemStatus = document.getElementById('systemStatus');

btnPlay.addEventListener('click', () => {
    btnPlay.style.display = 'none';
    screen.classList.add('active');
    
    // Đảm bảo video được tải lại và chạy từ đầu thật nét
    video.currentTime = 0;
    video.play();
    
    errorCode.innerText = "SUCCESS: ĐÃ TÌM THẤY EM";
    errorCode.style.color = "#00ff41";
    errorCode.style.textShadow = "0 0 15px #00ff41";
    
    systemStatus.innerText = "● HỆ THỐNG ĐÃ SẴN SÀNG";
    systemStatus.style.color = "#00ff41";
    subtext.innerText = "Đang hiển thị đoạn ký ức đẹp nhất...";

    let lineIndex = 0;
    const typeLine = () => {
        if (lineIndex < sadLines.length) {
            let lineDiv = document.createElement('div');
            lineDiv.innerText = sadLines[lineIndex];
            lineDiv.style.opacity = "0";
            lineDiv.style.marginBottom = "8px";
            lineDiv.style.transition = "all 0.8s ease";
            
            codeRain.appendChild(lineDiv);
            
            setTimeout(() => {
                lineDiv.style.opacity = "1";
            }, 50);

            lineIndex++;
            setTimeout(typeLine, 1200); 
        }
    };

    typeLine();
});