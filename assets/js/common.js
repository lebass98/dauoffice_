// 헤더와 푸터를 동적으로 로드하는 함수
async function loadHeaderFooter() {
    try {
        // 헤더 로드
        const headerResponse = await fetch('header.html');
        if (headerResponse.ok) {
            const headerHtml = await headerResponse.text();
            const headerPlaceholder = document.getElementById('header-placeholder');
            if (headerPlaceholder) {
                headerPlaceholder.innerHTML = headerHtml;
            }
        }

        // 푸터 로드
        const footerResponse = await fetch('footer.html');
        if (footerResponse.ok) {
            const footerHtml = await footerResponse.text();
            const footerPlaceholder = document.getElementById('footer-placeholder');
            if (footerPlaceholder) {
                footerPlaceholder.innerHTML = footerHtml;
            }
        }
    } catch (error) {
        console.error('헤더 또는 푸터를 불러오는 중 오류가 발생했습니다:', error);
    }
}

// DOM이 로드된 후 실행
document.addEventListener('DOMContentLoaded', loadHeaderFooter);

