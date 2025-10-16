'use strict';
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('searchForm');
  const out = document.getElementById('results');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    out.innerHTML = '';
    const q = document.getElementById('query').value.trim();
    if (!q) { out.textContent = 'Please enter a TV series name.'; return; }
    const url = `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(q)}`;
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error('Network error');
      const data = await res.json();
      if (!data.length) { out.textContent = 'No results found.'; return; }
      for (const item of data) {
        const show = item.show;
        const article = document.createElement('article');
        const h2 = document.createElement('h2'); h2.textContent = show.name; article.appendChild(h2);
        const a = document.createElement('a'); a.href = show.url; a.target = '_blank'; a.textContent = 'View details'; article.appendChild(a);
        if (show.image?.medium) { const img = document.createElement('img'); img.src = show.image.medium; img.alt = show.name; article.appendChild(img); }
        const div = document.createElement('div'); div.innerHTML = show.summary || 'No summary available.'; article.appendChild(div);
        out.appendChild(article);
      }
    } catch (err) {
      out.textContent = 'Error fetching data.'; console.error(err);
    }
  });
});