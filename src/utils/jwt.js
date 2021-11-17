export const addToken = () => {
    const collectToken = localStorage.getItem('token');
    const cleanUpToken = collectToken.replaceAll('"', '');
    const tokenComplet = `Bearer ${cleanUpToken}`;
    return tokenComplet;
}