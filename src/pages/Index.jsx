import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Hero Section */}
      <section className="mb-8">
        <Card>
          <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[400px]" />
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Featured Article Headline</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg">Brief description of the featured article...</p>
          </CardContent>
        </Card>
      </section>

      <Separator />

      {/* Latest News Section */}
      <section className="my-8">
        <h2 className="text-xl font-bold mb-4">Latest News</h2>
        <div className="grid gap-4">
          {[1, 2, 3].map((item) => (
            <Card key={item}>
              <CardHeader>
                <CardTitle className="text-lg font-semibold">News Headline {item}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Brief description of the news article...</p>
                <Badge className="mt-2">Timestamp</Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator />

      {/* Market Data Section */}
      <section className="my-8">
        <h2 className="text-xl font-bold mb-4">Market Data</h2>
        <div className="grid gap-4">
          {[1, 2, 3].map((item) => (
            <Card key={item}>
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Market Index {item}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Current value and percentage change...</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator />

      {/* Opinion Section */}
      <section className="my-8">
        <h2 className="text-xl font-bold mb-4">Opinion</h2>
        <div className="grid gap-4">
          {[1, 2, 3].map((item) => (
            <Card key={item}>
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Opinion Headline {item}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Brief description of the opinion article...</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;