function handleSearch(event) {
    event.preventDefault();
    const value = document.getElementById('search').value;
    alert('Поиск: ' + value);
    return false;
}
