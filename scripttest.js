const ball = document.querySelector('.ball');

document.addEventListener('mousemove', (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // คำนวณตำแหน่งใหม่ของลูกกลิ่ง
    const ballX = mouseX - ball.clientWidth / 2;
    const ballY = mouseY - ball.clientHeight / 2;

    // ตั้งค่าตำแหน่งของลูกกลิ่ง
    ball.style.left = `${ballX}px`;
    ball.style.top = `${ballY}px`;

    // คำนวณค่า scroll
    const scrollX = (mouseX / window.innerWidth) * (document.body.scrollWidth - window.innerWidth);
    const scrollY = (mouseY / window.innerHeight) * (document.body.scrollHeight - window.innerHeight);

    // เลื่อนหน้าจอ
    window.scrollTo(scrollX, scrollY);
});