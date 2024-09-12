//Export
// - export default, default chỉ có 1, nên sang bên import có thể đổi tên
// - export named,cho vào object,  name thì sang import phải đúng tên

const a = 10;
export const b = 20;
export const c = 30;
function something() {
    console.log(`ok`);
}
export default something;

export const home = () => {
    console.log(`home`);
};
