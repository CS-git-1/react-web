
# Daylist — React Todo List

แอปจัดการรายการสิ่งที่ต้องทำ สร้างด้วย React, TypeScript, Vite และ Material UI

## คุณสมบัติ

- เพิ่มงานใหม่
- ทำเครื่องหมายว่างานเสร็จแล้ว หรือเปิดกลับมาเป็นงานที่ยังไม่เสร็จ
- ลบงานรายรายการ
- กรองรายการเป็นทั้งหมด กำลังทำ หรือเสร็จแล้ว
- ลบงานที่เสร็จแล้วทั้งหมดได้ในครั้งเดียว
- รองรับการใช้งานบนมือถือและคอมพิวเตอร์

> รายการงานเก็บไว้ในหน่วยความจำของหน้าเว็บเท่านั้น เมื่อรีโหลดหรือปิดหน้าเว็บ รายการจะหายไป แอปยังไม่มีฐานข้อมูลหรือการบันทึกลงในเบราว์เซอร์

## สิ่งที่ต้องติดตั้งก่อน

- Node.js และ npm
- แนะนำให้ใช้ Node.js เวอร์ชัน 24 หรือเวอร์ชันที่ใหม่กว่า

ตรวจสอบการติดตั้งใน PowerShell:

```powershell
node -v
npm -v
```

```
หมายเหตุ : หาก PowerShell แจ้งว่าไม่รู้จักคำสั่ง `node` หรือ `npm` ให้เปิด Terminal ใหม่ก่อน หากยังใช้ไม่ได้ ให้ตรวจสอบว่าโฟลเดอร์ Node.js ถูกเพิ่มใน `PATH` แล้วหรือไม่
```

## ติดตั้งและเปิดโปรเจกต์

เปิด PowerShell แล้วเปลี่ยนไปยังโฟลเดอร์โปรเจกต์:

```powershell
cd C:\Portfolio\react-web
```

ติดตั้งแพ็กเกจ:

```powershell
npm install
```

จากนั้นเริ่มเซิร์ฟเวอร์สำหรับพัฒนา:

```powershell
npm run dev
```

เมื่อ Vite แสดง URL ใน Terminal ให้เปิด URL นั้นในเบราว์เซอร์ โดยปกติจะเป็น:

```text
http://localhost:5173/
```

**อย่าปิด Terminal ที่กำลังรัน Vite** ขณะใช้งานเว็บไซต์ หากปิด Terminal ให้รัน `npm run dev` ใหม่อีกครั้ง

### กรณี PowerShell เรียก `npm` ไม่ได้

ถ้าติดตั้ง Node.js ไว้ที่ `C:\Program Files\nodejs\` ให้ใช้คำสั่งต่อไปนี้แทน:

```powershell
cd C:\Portfolio\react-web
& 'C:\Program Files\nodejs\npm.cmd' install
& 'C:\Program Files\nodejs\npm.cmd' run dev
```

คำสั่งที่ขึ้นต้นด้วย `&` ใช้เรียกไฟล์ `npm.cmd` โดยตรง และไม่ต้องเปลี่ยน Execution Policy ของ PowerShell

## สร้างและดูตัวอย่างเวอร์ชันสำหรับใช้งานจริง

สร้างไฟล์สำหรับ production:

```powershell
npm run build
```

เมื่อ build สำเร็จ ให้เปิดตัวอย่างด้วย:

```powershell
npm run preview
```

จากนั้นเปิด URL ที่แสดงใน Terminal ซึ่งโดยปกติจะเป็น `http://localhost:5173/`

หาก PowerShell เรียก `npm` ไม่ได้ ให้ใช้พาธเต็ม เช่น:

```powershell
& 'C:\Program Files\nodejs\npm.cmd' run build
& 'C:\Program Files\nodejs\npm.cmd' run preview
```

## โครงสร้างโปรเจกต์

- `src/App.tsx` ประกอบหน้าแอปและเชื่อมต่อสถานะกับส่วนแสดงรายการงาน
- `src/components/` เก็บคอมโพเนนต์ส่วนติดต่อผู้ใช้
- `src/hooks/useTodos.ts` จัดการสถานะและการทำงานกับรายการงาน
- `src/types/todo.ts` กำหนดชนิดข้อมูลของงานและตัวกรอง
- `src/theme.ts` ตั้งค่าธีม Material UI
- `src/styles/global.css` กำหนดรูปแบบและการจัดวางที่รองรับหน้าจอขนาดต่าง ๆ

```
หมายเหตุ: README นี้มีทั้งคำสั่งทั่วไปและวิธีแก้กรณี PowerShell บนเครื่องคุณเรียก `npm` แบบสั้นไม่ได้ครับ.
```