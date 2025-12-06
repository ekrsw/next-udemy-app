import { PrismaClient } from "@/generated/prisma/client"
import * as bcrypt from "bcryptjs"

const prisma = new PrismaClient()

async function main() {
    // クリーンナップ
    await prisma.post.deleteMany()
    await prisma.user.deleteMany()
    const hashedPassword = await bcrypt.hash("password123", 12) // ハッシュ化
    const dummyImage = ['https://picsum.photos/seed/post1/600/400',
        'https://picsum.photos/seed/post2/600/400'] // ダミー画像
}

main().catch((e)=>{console.error(e) process.exit(1)})
    .finally(async () => {await prisma.$disconnect()})