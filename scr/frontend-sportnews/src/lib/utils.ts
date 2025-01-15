export const getToken = (): { id: string, username: string } => {
    return JSON.parse(localStorage.getItem("token")!);
}