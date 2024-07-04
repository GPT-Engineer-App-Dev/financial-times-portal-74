import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Sidebar = () => {
  return (
    <aside className="w-full md:w-1/4 p-4">
      {/* Trending Articles */}
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">Trending Articles</h2>
        <div className="grid gap-4">
          {[1, 2, 3].map((item) => (
            <Card key={item}>
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Trending Article {item}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section>
        <h2 className="text-xl font-bold mb-4">Newsletter Signup</h2>
        <Card>
          <CardContent>
            <Input type="email" placeholder="Enter your email" className="mb-4" />
            <Button className="w-full">Sign Up</Button>
          </CardContent>
        </Card>
      </section>
    </aside>
  );
};

export default Sidebar;