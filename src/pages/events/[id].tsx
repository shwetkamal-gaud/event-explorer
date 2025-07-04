import { GetStaticProps, GetStaticPaths } from "next";
import { events, Event } from "@/data/events";
import GlassCard from "@/components/GlassCard";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/router";

export default function EventDetail({ event }: { event: Event }) {
    const router = useRouter()
    return (
        <main className="p-4 flex items-center dark:text-white text-black justify-center flex-grow h-full w-full">
            <GlassCard className="items-start">
                <button onClick={() => router.back()} className="rounded-full p-1 bg-[#eeb2b6] dark:bg-[#310320] inline-block">
                    <ChevronLeft/>
                </button>
                <main className="p-2">
                    <h1 className="text-3xl font-bold mb-2">{event.title}</h1>
                    <p className="text-gray-600 dark:text-gray-300">{event.date} | {event.location}</p>
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
