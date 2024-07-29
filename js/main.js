// -----------------------------------------------------DARSDA KO’RILISHI KERAK BO’LGAN MASALALAR-----------------------------------------------

// ------------------------------------------------------------------For1-----------------------------------------------------------------------

// k va n butun sonlari berilgan (n > 0). k sonini n marta chiqaruvchi programma tuzilsin.

// let k = parseInt(prompt("k sonini kiriting"));
// let n = parseInt(prompt("n sonini kiriting"));
// for (let i = 0; i < n; i++){
//     console.log(k);
// }

// ------------------------------------------------------------------For2----------------------------------------------------------------------

// Bir kg konfetning narxi berilgan (haqiqiy son). 0.1, 0.2, …, 0.9, 1 kg konfetni narxini chiqaruvchi programma tuzilsin.

// let a=parseFloat(prompt("Kanfet narxini kiriting"));
// for (var i = 1; i <= 10; i++) { 
// var ogirligi = i / 10; 
// var price = (ogirligi)*a;
// console.log(ogirligi + " kg konfetning narxi: $" , price);
// }


// ---------------------------------------------------------------------For3-------------------------------------------------------------------

// n butun soni berilgan (n > 0). Quyidagi yig'indini hisoblovchi programma tuzilsin. 
// S = n^2 +(n+1)^2+(n+2)^2 + ... +(2*n)^2

// let n = parseInt(prompt("n butun sonini kiriting"));
// let S = 0;
// for (let i = 0; i <= n; i++) {
//     S += Math.pow((n + i), 2);
// }
// console.log(S);

// ---------------------------------------------------------------------For4-----------------------------------------------------------------

// N butun soni berilgan. Quyidagi yig'indini chiqaruvchi programma tuzilsin.
// 1^N+2^(N-1) + ...+ N^1
// Input: N = 5;
// 1 ^ 5 + 2 ^ 4 + 3 ^ 3 + 4 ^ 2 + 5 ^ 1
// Output: 65

// let N=parseInt(prompt("N butun sonini kiriting"));
// {
// let S = 0;
// for (let i = 0; i <= N; i++) {
// S += Math.pow(i, N - i + 1);
//     }
// console.log(S);
// }


// --------------------------------------------------------------------------For5---------------------------------------------------------------

// A va B butun soni berilgan (A < B). A va B sonlari orasidagi barcha butun sonlarni chiqaruvchi programma tuzilsin.
//Bunda har bir son o'zining qiymaticha chiqarilsin. Ya'ni 3 soni 3 marta chiqariladi.

// let A=parseInt(prompt("A butun sonini kiriting"));
// let B=parseInt(prompt("B butun sonini kiriting"));{
// for (let i = A; i <= B; i++) {
// for (let j = 1; j <= i; j++) {
// console.log(i);
//         }
//     }
// }

// -------------------------------------------------------------------------For6----------------------------------------------------------------

// Sonning bo’luvchilarini topish;

// let a=parseFloat(prompt("a sonini kiriting"));
// {
// for (let i = 1; i <= a; i++) {
//         if (a % i === 0) {
//         }
//         console.log(a);
//     }
// }

// --------------------------------------------------------------------------While1-------------------------------------------------------------

// N va K butun musbat sonlari berilgan.
// Faqat ayirish va qo'shish amallarini ishlatib N sonini K soniga bo'lgandagi qoldiq va butun qismini aniqlovchi programma tuzilsin.

// let N = parseInt(prompt("N butun musbat sonini kiriting"));
// let K = parseInt(prompt("K butun musbat sonini kiriting"));
// let x = 0; 
// let y = 0;

// while (true) {
//   if (N - K <= 1) {
//     x = N - K;
//     N = x;
//     y += 1;
//     break;
//   } else {
//     x = N - K;
//     N = x;
//     y += 1;
//   }
// }
// console.log(y, x);

// --------------------------------------------------------------------------While2--------------------------------------------------------------

// 2 sonining qandaydir darajasini bildiruvchi n butun soni berilgan (n > 0). n = 2^k ni aniqlovchi programma tuzilsin.
// Input: 128
// Output: 7

// let n = parseInt(prompt("n butun sonini kiriting:"));
// let k = 0;

// while (n > 1) {
//     n /= 2;
//     k++;
// }

// console.log("n = 2^" + k);


// ---------------------------------------------------------------------------UYGA VAZIFA--------------------------------------------------------

// ------------------------------------------------------------------------------For1-----------------------------------------------------------

// a va b butun sonlari berilgan (a < b). a va b sonlari orasidagi barcha butun sonlarni
// (a va b ni ham) chiqaruvchi va chiqarilgan sonlar sonini chiqaruvchi programma tuzilsin. (a va b xam chiqarilsin).

// let a = parseInt(prompt("a butun sonini kiriting:"));
// let b = parseInt(prompt("b butun sonini kiriting:"));
// let count = 0;

// console.log("Berilgan sonlar: a =", a, ", b =", b);
// console.log("Barcha butun sonlar:");

// for (let i = a; i <= b; i++) {
//     console.log(i);
//     count++;
// }

// console.log("Chiqarilgan sonlar soni:", count);


// -------------------------------------------------------------------------------For2---------------------------------------------------------

// a va b butun sonlari berilgan (a < b). a va b sonlari orasidagi barcha butun sonlarni 
// (a va b dan tashqari) kamayish tartibida chiqaruvchi va chiqarilgan sonlar sonini chiqaruvchi progma tuzilsin.

// let a = parseInt(prompt("a butun sonini kiriting:"));
// let b = parseInt(prompt("b butun sonini kiriting:"));
// let count = 0;

// console.log("Berilgan sonlar: a =", a, ", b =", b);
// console.log("Barcha butun sonlar (kamayish tartibida):");

// if (a < b) {
//     for (let i = b; i >= a; i--) {
//         console.log(i);
//         count++;
//     }
// } else {
//     for (let i = a; i >= b; i--) {
//         console.log(i);
//         count++;
//     }
// }
// console.log("Chiqarilgan sonlar soni:", count);


// ---------------------------------------------------------------------------------For3----------------------------------------------------------

// Bir kg konfetning narxi berilgan (haqiqiy son). 1, 2, 10 kg konfetni narxini chiqaruvchi programma tuzilsin.

// let narx = parseFloat(prompt("1 kg konfet narxini kiriting:"));

// let narx_1kg = narx;
// let narx_2kg = narx * 2;
// let narx_10kg = narx * 10;

// console.log("1 kg konfet narxi:", narx_1kg);
// console.log("2 kg konfet narxi:", narx_2kg);
// console.log("10 kg konfet narxi:", narx_10kg);

// -------------------------------------------------------------------------------For4------------------------------------------------------------

// Bir kg konfetning narxi berilgan (haqiqiy son). 1.2, 1.4, ..., 2 kg konfetni narxini chiqaruvchi programma tuzilsin.

// const Narx = parseFloat(prompt("Bir kilogram konfetning narxini kiriting: "));

// for (let kg = 1.2; kg <= 2; kg += 0.2) {
//     const narx = Narx * kg;
//     console.log(`${kg} kg konfet narxi: ${narx}`);
// }


// --------------------------------------------------------------------------------For5-----------------------------------------------------------

// a va b butun sonlari berilgan (a < b). a dan b gacha bo'lgan barcha butun sonlar yig'indisini chiqaruvchi programma tuzilsin.

// const a = parseInt(prompt("a ni kiriting: "));
// const b = parseInt(prompt("b ni kiriting: "));

// let yigindi = 0;
// for (let i = a; i <= b; i++) {
//     yigindi += i;
// }

// console.log("${a} dan ${b} gacha bo'lgan butun sonlar yig'indisi: ${yigindi}");

// --------------------------------------------------------------------------------For6----------------------------------------------------------

// a va b butun sonlari berilgan (a < b). a dan b gacha bo'lgan barcha butun sonlar ko'paytmasini chiqaruvchi programma tuzilsin.

// const a = parseInt(prompt("a ni kiriting: "));
// const b = parseInt(prompt("b ni kiriting: "));

// let kopaytma = 1;
// for (let i = a; i <= b; i++) {
//     kopaytma *= i;
// }

// console.log(`${a} dan ${b} gacha bo'lgan butun sonlar ko'paytmasi: ${kopaytma}`);

// ---------------------------------------------------------------------------------For7--------------------------------------------------------

// a va b butun sonlari berilgan (a < b). a dan b gacha bo'lgan barcha butun sonlar kvadratlarining yig'indisini chiqaruvchi programma tuzilsin.

// const a = parseInt(prompt("a ni kiriting: "));
// const b = parseInt(prompt("b ni kiriting: "));

// let yigindi = 0;
// for (let i = a; i <= b; i++) {
//     yigindi += i * i;
// }

// console.log(`${a} dan ${b} gacha bo'lgan butun sonlar kvadratlarining yig'indisi: ${yigindi}`);


// -------------------------------------------------------------------------------For8-----------------------------------------------------------

// n butun soni berilgan (n > 0). Quyidagi yig'indini hisoblovchi programma tuzilsin. S=1+1/2+1/3+...+1/n;

// const n = parseInt(prompt("n sonini kiriting (n > 0): "));

// let summa = 0;
// for (let i = 1; i <= n; i++) {
//     summa += 1 / i;
// }

// console.log(`S = 1 + 1/2 + 1/3 + ... + 1/${n} ning yig'indisi: ${summa}`);

// -------------------------------------------------------------------------------For9----------------------------------------------------------

// n butun soni berilgan (n > 0). Quyidagi ko'paytmani hisoblovchi programma tuzilsin. S=1.1*1.2* 1.3*... *n

// const n = parseInt(prompt("n sonini kiriting (n > 0): "));
// let kopaytma = 1;
// for (let i = 1.1; i <= n + 0.1; i += 0.1) {
//     kopaytma *= i;
// }

// console.log(`S = 1.1 * 1.2 * 1.3 * ... * ${n} ning ko'paytmasi: ${kopaytma}`);


// -------------------------------------------------------------------------------For10-------------------------------------------------------

// n butun soni berilgan (n > 0). Shu sonning kvadratini quyidagi formula asosida hisoblovchi programma tuzilsin.
// n^2=1+3+5+... + (2*n-1)
// Har bir qo'shiluvchidan keyin natijani ekranga chiqarib boring. Natijda ekranda 1 dan n gacha bo'lgan sonlar kvadrati chiqariladi.

// const n = parseInt(prompt("n sonini kiriting (n > 0): "));
// let kvadrati=1;
// for(let i = 1; i <= 2*n-1; i++){
//     kvadrati +=i
// }
// console.log(kvadrati);


// --------------------------------------------------------------------------------For11----------------------------------------------------

// n butun soni va a haqiqiy soni berilgan (n > 0). a ning n - darajasini aniqlovchi programma tuzilsin.a^n=a*a*a...a;

// const n = parseInt(prompt("n sonini kiriting (n > 0): "));
// const a = parseFloat(prompt("a haqiqiy sonini kiriting"));

// let Darajasi=1;
// for( let i = 1; i <= n; i++){
//     Darajasi *=a
// }
// console.log(Darajasi);

// --------------------------------------------------------------------------------For12---------------------------------------------------

//n butun soni va a haqiqiy soni berilgan (n > 0).
//Bir sikldan foydalanib a ning 1 dan n gacha bo'lgan barcha darajalarini chiqaruvchi programma tuzilsin.

// const n = parseInt(prompt("n sonini kiriting (n > 0): "));
// const a = parseFloat(prompt("a sonini kiriting: "));

// console.log(`${a} ning darajalari:`);
// for (let i = 1; i <= n; i++) {
//     let natija = 1;
//     for (let j = 1; j <= i; j++) {
//         natija *= a;
//     }
//     console.log(`${a}^${i} = ${natija}`);
// }


// --------------------------------------------------------------------------------For13----------------------------------------------------

// n butun soni va a haqiqiy soni berilgan (n > 0). Bir sikldan foydalanib quyidagi a ning 1 dan n gacha bo'lgan barcha
// darajalarini chiqaruvchi va yig'indini hisoblovchi programma tuzilsin. // S = 1+a^1+a^2 + a^3 + ... a^n

// const n = parseInt(prompt("n sonini kiriting (n > 0): "));
// const a = parseFloat(prompt("a sonini kiriting: "));

// let S = 0;
// console.log(`${a} ning darajalari:`);
// for (let i = 0; i <= n; i++) {
//     let daraja = Math.pow(a, i);
//     console.log(`${a}^${i} = ${daraja}`);
//     S += daraja;
// }

// console.log(`Yig'indi: ${S}`);

// ---------------------------------------------------------------------------------For14-----------------------------------------------------

// n butun soni berilgan (n > 0). Bir sikldan foydalangan holda quyidagi yig'indini hisoblovchi programma tuzilsin.
// S = 1! + 2! + 3! + ... + n!

// var n=parseInt(prompt("n butun sonini kiriting (n>0): "));
// S=0;
// faktarial=1;
// for(let i = 1; i <= n; i++){
//     faktarial *=i
//     S +=faktarial
// }
// console.log("Yigindisi",S);

// ---------------------------------------------------------------------------------For15-----------------------------------------------------

// N va K butun sonlari berilgan. Quyidagi yig'indini chiqaruvchi programma tuzilsin. 
// S = 1^K + 2^K + ... + N^K

// let N=parseInt(prompt("N butun sonini kiriting"));
// let K=parseInt(prompt("K butun sonini kiriting"));

// let S = 0;
// for(let i = 1; i <= N; i++ ) {
 
//     S += Math.pow(i, K);
// }
// console.log(S);


// ----------------------------------------------------------------------------------For16---------------------------------------------------

// N butun soni berilgan. Quyidagi yig'indini chiqaruvchi programma tuzilsin. 
// S = 1^1 + 2^2 + … + N^N

// var N=parseInt(prompt("N butun sonini kiriting"));
// let S=1;
// for(let i = 1; i <= N; i++){
//    S +=Math.pow(i,i)
// }
// console.log(S);

// --------------------------------------------------------------------------------For17---------------------------------------------------

// A va B butun soni berilgan (A < B).
// A va B sonlari orasidagi barcha butun sonlarni chiqaruvchi programma tuzilsin. Bunda A soni 1 marta, (A + 1) soni 2 marta chiqariladi va xokazo

// var A=parseInt(prompt("A butun sonini kiriting (A<B)"));
// var B=parseInt(prompt("B butun sonini kiriting"));

// for(let i = A; i <= B; i++){
//     for (let j = 1; j <= i - A + 1; j++) {
//         console.log(i);
//     }
// }

// ---------------------------------------------------------------------------------For18-------------------------------------------------

// Sonning barcha bo’luvchilarini, ularning sonini va yig’indisini chiqaruvchi dastur tuzing.

// const number = parseInt(prompt("Bir son kiriting: "));
// let summa = 0;

// console.log(`${number} ning bo’luvchilari:`);
// for (let i = 1; i <= number; i++) {
//     if (number % i === 0) {
//         console.log(i);
//         summa += i;
//     }
// }

// console.log(`${number} ning bo’luvchilari yig'indisi: ${summa}`);


// -------------------------------------------------------------------------------For19--------------------------------------------------

// n butun soni berilgan (n > 1). N sonini tub yoki tub emasligini aniqlovchi programma tuzilsin.
// const n = parseInt(prompt("n sonini kiriting (n > 1): "));

// let tub = true;
// if (n <= 1) {
//     tub = false;
// } else {
//     for (let i = 2; i <= Math.sqrt(n); i++) {
//         if (n % i === 0) {
//             tub = false;
//             break;
//         }
//     }
// }

// if (tub) {
//     console.log(`${n} soni tub son.`);
// } else {
//     console.log(`${n} soni tub son emas.`);
// }


// ----------------------------------------------------------------------------------For20----------------------------------------------

// Sonlarni quyidagi tartibda chiqaruvchi dastur tuzing. N = 5 bo’lganda,
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

// const N = parseInt(prompt("N sonini kiriting: "));

// for (let i = 1; i <= N; i++) {
//     let row = "";
//     for (let j = 1; j <= i; j++) {
//         row += j + " ";
//     }
//     console.log(row);
// }

// ----------------------------------------------------------------------------------While1--------------------------------------------

// A va B butun musbat sonlari berilgan (A> B). A usunlikdagi kesmada maksimal darajada B kesma joylashtirilgan.
// A kesmaning bo'sh qismini aniqlovchi programma tuzilsin. Ko'paytirish va bo'lish amallarini ishlatmang.

// const A = parseInt(prompt("A ni kiriting (musbat son): "));
// const B = parseInt(prompt("B ni kiriting (musbat son): "));

// let bosh_qism = A % B;

// console.log(`A kesmaning bo'sh qismi: ${bosh_qism}`);


// ----------------------------------------------------------------------------------While2--------------------------------------------------------

//  A va B butun musbat sonlari berilgan (A > B). A usunlikdagi kesmada B kesmadan nechta joylashtirish mumkinligini aniqlovchi programma tuzilsin.
//  Ko'paytirish va bo'lish amallarini ishlatmang.

// const A = parseInt(prompt("A ni kiriting (musbat son): "));
// const B = parseInt(prompt("B ni kiriting (musbat son): "));

// let joylashtirishMumkinligi = Math.floor(A / B);

// console.log(`A usunlikdagi kesmada B kesmadan ${joylashtirishMumkinligi} marta joylashtirish mumkin.`);


//  ---------------------------------------------------------------------------------While3----------------------------------------------------------

// n butun soni berilgan (n > 0). Agar n soni 3 ning darajasi bo'lsa "3 - ning darajasi",
// aks xolda "3 - ning darajasi emas” degan natija chiqaruvchi programma tuzilsin. Qoldiqli bo'lish va bo'lish amallarini ishlatmang.

// const n = parseInt(prompt("n sonini kiriting (n > 0): "));

// let natija = "3 - ning darajasi emas";
// let daraja = 3 * 3; // 3 ning darajasi

// while (daraja <= n) {
//     if (daraja === n) {
//         natija = "3 - ning darajasi";
//         break;
//     }
//     daraja *= 3;
// }

// console.log(natija);

// ----------------------------------------------------------------------------------While4------------------------------------------------------------

//n va m butun musbat sonlari berilgan (n > m). n sonini m soniga bo'lib butun va qoldiq qismlarini bo'lish va
//qoldiqni olish amallarini ishlatmasdan topuvchi programma tuzilsin.

// const n = parseInt(prompt("n sonini kiriting (musbat son): "));
// const m = parseInt(prompt("m sonini kiriting (musbat son va n dan kichik): "));

// const butunQism = Math.floor(n / m);
// const qoldiq = n % m;

// console.log(`${n} ni ${m} ga bo'lib bo'lish natijasi:`);
// console.log(`Butun qism: ${butunQism}`);
// console.log(`Qoldiq: ${qoldiq}`);

// ------------------------------------------------------------------------------------While5-----------------------------------------------------------

// n butun soni berilgan (n > 0).
//  Bo'lib butun va qoldiq qismlarini aniqlash orqali, berilgan son raqamlarini teskari tartibda chiqaruvchi programma tuzilsin.

let n=parseInt(prompt("n sonini kiriting (n>0)"));

const butunqismi=Math.floor(n/10)