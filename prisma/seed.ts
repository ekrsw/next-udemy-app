import { PrismaClient } from "@prisma/client"
import * as bcrypt from "bcryptjs"

const prisma = new PrismaClient()

async function main() {
    // クリーンナップ
    await prisma.post.deleteMany()
    await prisma.user.deleteMany()

    const hashedPassword = await bcrypt.hash("password123", 12) // ハッシュ化
    const dummyImages = [
        'https://picsum.photos/seed/post1/600/400',
        'https://picsum.photos/seed/post2/600/400'
    ] // ダミー画像
    
    // ユーザー作成
    const user = await prisma.user.create({
        data: {
            email: 'test@example.com',
            name: 'Test User',
            password: hashedPassword,
            posts: {
                create: [
                    {
                        title: '初めてのブログ投稿',
                        content: 'これは初めてのブログ投稿です。',
                        topImage: dummyImages[0],
                        published: true
                    },{
                        title: '2番目の投稿',
                        content: 'これは2番目の投稿です。',
                        topImage: dummyImages[1],
                        published: true
                    }
                ]
            }
        }
    })

    console.log(`🌱 ユーザーと投稿が作成されました: ${user}`)
}

main()
    .catch((e)=>{
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect()
    })