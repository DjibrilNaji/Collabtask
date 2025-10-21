import { Card, CardDescription, CardHeader, CardTitle } from "@/web/components/ui/card"

interface FeatureCardProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  title: string
  description: string
}
export default function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 items-center justify-center rounded-lg bg-muted flex">
            <Icon className="h-5 w-5" aria-hidden="true" />
          </div>
          <CardTitle className="text-lg">{title}</CardTitle>
        </div>
        <CardDescription className="mt-2 text-md">{description}</CardDescription>
      </CardHeader>
    </Card>
  )
}
