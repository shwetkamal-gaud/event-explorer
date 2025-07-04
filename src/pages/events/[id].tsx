import { GetStaticProps, GetStaticPaths } from "next";
import { events, Event } from "@/data/events";
import Head from "next/head";
import GlassCard from "@/components/GlassCard";

export default function EventDetail({ event }: { event: Event }) {
    return (
        <main className="p-4 flex items-center justify-center flex-grow h-full w-full">
            <GlassCard className="">
                <main className="max-w-3xl mx-auto p-4">
                    <h1 className="text-3xl font-bold mb-2">{event.title}</h1>
                    <p className="text-gray-600">{event.date} | {event.location}</p>
                    <section className="mt-4">{event.fullDetails}</section>
                </main>
            </GlassCard>
        </main>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = events.map((e) => ({ params: { id: e.id } }));
    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const event = events.find((e) => e.id === params?.id);
    return { props: { event } };
};
