const editor = document.querySelector(".editor");
const fileBtn = document.querySelector(".fileBtn");
const fileDropdown = document.querySelector(".dropdown-content");
const newFile = document.querySelector(".newFile");
const saveTxt = document.querySelector(".saveTxt");
const savePdf = document.querySelector(".savePdf");
const fileName = document.querySelector(".fileName");
const boldBtn = document.querySelector(".boldBtn");
const italicBtn = document.querySelector(".italicBtn");
const underlineBtn = document.querySelector(".underlineBtn");
const colorPicker = document.querySelector(".colorPicker");
const charCount = document.querySelector(".charCount");
const wordCount = document.querySelector(".wordCount");
const uploadFile = document.querySelector(".uploadFile");
const saveImg = document.querySelector(".saveImg");
const customUploadBtn = document.querySelector(".customUploadBtn");

// fileBtn click
fileBtn.addEventListener("click", () => {
    fileDropdown.classList.toggle("show");
});

// click outside fileDropdown
document.addEventListener("click", (e) => {
    if (
        e.target !== fileDropdown &&
        e.target !== fileBtn &&
        e.target !== fileBtn.firstElementChild
    ) {
        fileDropdown.classList.remove("show");
    }
});

// newFile click
newFile.addEventListener("click", () => {
    editor.textContent = "";
    fileName.value = "untitled";
    charCount.textContent = `Số ký tự: 0`;
    wordCount.textContent = `Số từ: 0`;
    colorPicker.value = "#000000";
});

// word count
editor.addEventListener("input", () => {
    const text = editor.textContent;
    const words = text.split(" ");
    const wordsNoEmpty = [];
    words.forEach((word) => {
        if (word.trim() !== "") {
            wordsNoEmpty.push(word);
        }
    });
    charCount.textContent = `Số ký tự: ${text.length}`;
    wordCount.textContent = `Số từ: ${wordsNoEmpty.length}`;
});

// boldBtn click
boldBtn.addEventListener("click", () => {
    document.execCommand("bold");
});

// italicBtn click
italicBtn.addEventListener("click", () => {
    document.execCommand("italic");
});

// underlineBtn click
underlineBtn.addEventListener("click", () => {
    document.execCommand("underline");
});

// colorPicker change
colorPicker.addEventListener("change", () => {
    document.execCommand("foreColor", false, colorPicker.value);
});

// save txt
saveTxt.addEventListener("click", () => {
    const text = editor.textContent;
    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${fileName.value}.txt`;
    link.click();
});

// save pdf
savePdf.addEventListener("click", () => {
    const text = editor.textContent;
    html2pdf().from(text).save(`${fileName.value}.pdf`);
});

// uploadFile
uploadFile.addEventListener("change", (e) => {
    const files = e.target.files;
    Array.from(files).forEach((file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            const img = document.createElement("img");
            img.src = reader.result;
            img.style.maxWidth = "100%";
            editor.appendChild(img);
        };
    });
});

// saveImg to pdf
saveImg.addEventListener("click", () => {
    const element = editor.cloneNode(true);
    const images = element.querySelectorAll("img");
    images.forEach((img) => {
        img.style.maxWidth = "100%";
        img.style.height = "auto";
    });

    const opt = {
        margin: 10,
        filename: `${fileName.value}.pdf`,
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    html2pdf().set(opt).from(element).save();
});

// customUploadBtn
customUploadBtn.addEventListener("click", () => {
    uploadFile.click();
});
