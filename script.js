function loadPage(page) {
    const content = document.getElementById('content');
    if (page === 'home') {
        content.innerHTML = `
            <h2>딤두두 님의 홈페이지</h2>
            <div>
            <p>
                요즘 냉장고를 부탁해에 빠졌다.<br>
                요리 프로그램을 찾아서 본 적은 처음이다.<br>
                나도 개발을 잘 해서 유퀴즈에 나가서 유명해져서<br>
                냉장고를 부탁해에 나가고 싶다는 망상을 했다.<br>
            </p>
            </div>
            `;
    }

    else if (page === 'game') {
        content.innerHTML = `
            <h2>게임</h2>
            <div>
            <p>아직 준비 중입니다</p>
            </div>
            `;
    }  

    else if (page === 'guestbook') {
        content.innerHTML = `
            <h2>방명록</h2>
            <div>
            <p>놀러와 줘서 고마워요!</p>
            </div>
            `;
    }   
}
loadPage('home');