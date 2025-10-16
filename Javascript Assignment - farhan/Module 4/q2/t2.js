'use strict';
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('searchForm');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const q = document.getElementById('query').value.trim();
    if (!q) { console.log('Please enter a TV show name.'); return; }
    const url = `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(q)}`;
    console.log('Fetching:', url);
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error('Network error');
      const data = await res.json();
      console.log('Results:', data);
    } catch (err) {
      console.error(err);
    }
  });
});