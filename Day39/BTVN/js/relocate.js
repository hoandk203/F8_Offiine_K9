const relocate = (text) => {
    let status = true;
    switch (text) {
        case "facebook":
            window.open("https://www.facebook.com");
            break;
        case "google":
            window.open("https://google.com");
            break;
        case "youtube":
            window.open("https://youtube.com");
            break;
        case "google drive":
            window.open("https://drive.google.com");
            break;
        case "google maps":
        case "bản đồ":
            window.open("https://maps.google.com");
            break;

        default:
            if (
                text.includes("chỉ đường") ||
                text.includes("chỉ đường tới") ||
                text.includes("đường tới") ||
                text.includes("tới")
            ) {
                window.open(
                    `https://www.google.com/maps/place/${text
                        .replace("chỉ đường", "")
                        .replace("chỉ đường tới", "")
                        .replace("đường tới", "")
                        .replace("tới", "")
                        .trim()}`
                );
            } else if (
                text.includes("bài hát") ||
                text.includes("mở bài hát") ||
                text.includes("nghe bài hát")
            ) {
                window.open(
                    `https://zingmp3.vn/tim-kiem/tat-ca?q=${text
                        .replace("bài hát", "")
                        .replace("mở bài hát", "")
                        .replace("nghe bài hát", "")
                        .trim()}`
                );
            } else if (
                text.includes("video") ||
                text.includes("mở video") ||
                text.includes("xem video")
            ) {
                window.open(
                    `https://www.youtube.com/results?search_query=${text
                        .replace("video", "")
                        .replace("mở", "")
                        .replace("xem", "")
                        .trim()}`
                );
            } else {
                status = false;
            }
            break;
    }
    return status;
};

export { relocate };
