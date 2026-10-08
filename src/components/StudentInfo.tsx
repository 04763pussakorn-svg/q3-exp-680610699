import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Badge } from "@/components/ui/badge"


export function StudentInfo() {
  return (
    
    <Drawer swipeDirection="left">
      <DrawerTrigger>
        <div className="flex-1 p-4">
          <button className="border border-gray-300 rounded-md px-2 hover:bg-oklch-100; focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary" > 
            Pussakorn Tapjak
          </button>
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>ข้อมูลนักศึกษา</DrawerTitle>
          <DrawerDescription>
            Student information
          </DrawerDescription>
        </DrawerHeader>
        <div className="p-4">
          <p>พัสกร เทพจักร์</p>
          <p>นักศึกษาชั้นปีที่ 2 คณะวิศวกรรมศาสตร์ มหาวิทยาลัยเชียงใหม่</p>
          <Badge className = "bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300">Hobbies</Badge><span>ฟังเพลง, เล่นเกม, ต่อโมเดลประกอบ</span>
          <br />
          <Badge className = "bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300">Email</Badge><span>pussakorn.tapjak@cmu.ac.th</span>
          <br />
          <Badge className = "bg-purple-50 text-purple-700 dark:bg-purple-950 dark:text-purple-300">Social</Badge><span>Facebook : Pussakorn Tapjak</span>
          <br />
          <p>รหัสนักศึกษา: 680610699</p>
        </div>
        <DrawerFooter>
          <DrawerClose className="border border-black-300 rounded-md px-2 hover:bg-black-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
            Close
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
