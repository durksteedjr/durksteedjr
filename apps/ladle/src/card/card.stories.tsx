import {
  Card,
  CardContent,
  CardDescription,
  CardTitle
} from "@durksteedjr/ui";

export const Default = () => (
  <Card>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
    <CardContent>Content</CardContent>
  </Card>
);

export const Hover = () => (
  <Card variant="hover">
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
    <CardContent>Content</CardContent>
  </Card>
);
