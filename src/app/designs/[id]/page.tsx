import Link from "next/link";
import data from "@/data/designs_data.json";
import { Button, Card, Image } from "@/components";
import { Container, Section } from "@/common";
import { RecommendedArticle } from "./_client/recommendedarticle";
import { useMemo } from "react";
import { RelatedTags } from "./_client/relatedtags";

export async function generateStaticParams() {
  return data.designs_section.designs.map((post: { id: any }) => ({
    id: post.id.toString(),
  }));
}

export default function Design({ params: { id } }: { params: { id: string } }) {
  const project = data.designs_section.designs.find(
    (p) => p.id.toString() === id
  );

  const filterRelatedTags = useMemo(() => {
    const newData = data.designs_section.designs;
    if (project?.tag === "component")
      return newData
        .filter((e) => e.tag === "component")
        .filter((e) => e.id !== project.id);
    if (project?.tag === "layout")
      return newData
        .filter((e) => e.tag === "layout")
        .filter((e) => e.id !== project.id);
    if (project?.tag === "css")
      return newData
        .filter((e) => e.tag === "css")
        .filter((e) => e.id !== project.id);

    return newData;
  }, [project]);

  const filterRecommendedArticles = useMemo(() => {
    const newData = data.designs_section.designs;
    return newData.filter((e) => e.tag !== project?.tag);
  }, [project]);

  if (!project) return null;

  return (
    <>
      <Section id="design">
        <Container id="design-container" className="!text-left">
          {/* <Link href={"/designs"}>
            <Button label="Back" icon="arrow-left" />
          </Link> */}

          <div className="grid grid-cols-1 lg:grid-cols-[1fr,_300px] gap-20">
            <div className="space-y-20">
              <div className="text-left space-y-4">
                <Image
                  aspectRatio="16:9"
                  alt={project.img.alt}
                  src={project.img.url}
                  thumbnail={project.img.thumbnail}
                  className="!rounded-2xl"
                />
                <div className="space-y-1">
                  <h2 className="text-4xl font-semibold text-secondary">
                    {project.topic}
                  </h2>
                  <p className="opacity-50">Tag: {project.tag}</p>
                </div>
                <p className="!mt-6">{project.description}</p>
              </div>
              <RelatedTags data={filterRelatedTags} />
            </div>
            <RecommendedArticle data={filterRecommendedArticles} />
          </div>
        </Container>
      </Section>
    </>
  );
}
