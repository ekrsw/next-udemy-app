import Link from "next/link"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

export default function PostCard() {
  return (
    <Card className="hover: shadow-lg transition-shadow">
        <Link href="{`/posts/${post.id}`}">
            <CardHeader>
                <CardTitle className="line-clamp-2">{post.title}</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-gray-600 mb-2 line-clamp-2">{post.content}</p>
            </CardContent>
        </Link>
    </Card>
  )
}
