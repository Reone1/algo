function solution(new_id) {
    new_id = String(new_id.toLowerCase())
    new_id = new_id.replace(/[^a-z0-9-._]/g, '').replace(/\.{2,}/g, '.').replace(/^\.|\.$/g, '');
    new_id = new_id === '' ? 'a' : new_id
    new_id = new_id.length > 15 ? new_id.slice(0, 15) : new_id
    new_id = new_id.replace(/\.$/g, '');
    new_id = new_id.length < 3 ? new_id + new_id.slice(-1).repeat(3 - new_id.length) : new_id
    return new_id;
}