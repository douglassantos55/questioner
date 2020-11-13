export function formatTime(seconds: number) {
    if (isNaN(seconds)) {
        return "";
    }

    var h = Math.floor(seconds / 3600);
    var m = Math.floor(seconds % 3600 / 60);
    var s = Math.floor(seconds % 3600 % 60);

    var hDisplay = h > 0 ? h + "h" : "";
    var mDisplay = m > 0 ? m + "m" : "";
    var sDisplay = s + "s";

    return hDisplay + " " + mDisplay + " " + sDisplay; 
}
