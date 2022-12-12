function showAd() {
  window.setTimeout(() => {
    document.getElementById('sponsor-ad').classList.remove('hidden');
  }, 500);
}

window.addEventListener('DOMContentLoaded', () => {
  showAd();
});
