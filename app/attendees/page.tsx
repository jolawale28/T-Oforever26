import { ChevronLeft, ChevronRight } from "lucide-react";
import { NavBar } from "../components";
import { getAttendees, getPaginatedAttendees } from "../lib/actions/submissions";
import Link from "next/link";

export default async function Attendees({
    searchParams,
}: {
    searchParams: Promise<{ page?: string; pageSize?: string }>;
}) {

    const params = await searchParams;
    const pageParam = Number(params.page ?? "1");
    const page = pageParam > 0 ? pageParam: 1
    const pageSizeParam = Number(params.pageSize ?? "10")
    const pageSize = pageSizeParam > 0 ? pageSizeParam: 2

    const { data: attendees, pagination } = await getPaginatedAttendees(page, pageSize);
    console.log(pagination, " :: submissions")
    return (
        <>
            <header className="" id="">
                <NavBar />
            </header>

            <main>
                <section className="section rsvp" id="rsvp">
                    <div className="section-label">Attendees Data</div>
                    <div className="space-y-5">
                        <div className="overflow-x-auto hide-scrollbar w-full border border-gray-200 rounded-lg overflow-hidden">
                            <table className="text-sm text-left w-full">
                                <thead className="text-base border-b border-b-gray-200 text-nowrap">
                                    <tr>
                                        <th className={`px-4 py-4 font-semibold border-r border-gray-200 sticky top-0 left-0 shadow-sm bg-[#fffdf8]`} style={{ width: "5%" }}>
                                            S/N
                                        </th>
                                        <th className="p-4 font-semibold">Name</th>
                                        <th className="px-4 py-4 font-semibold">Email</th>
                                        <th className="px-4 py-4 font-semibold text-center">Phone</th>
                                        <th className="px-4 py-4 font-semibold text-center">
                                            Will Attend
                                        </th>
                                        <th className="px-4 py-4 font-semibold text-center">Relationship</th>
                                        <th className="px-4 py-4 font-semibold">Message</th>
                                        <th className="px-4 py-4 font-semibold text-center">Date Created</th>
                                    </tr>
                                </thead>
                                <tbody className="text-nowrap">
                                    {
                                        attendees.length > 0 && attendees.map((item, idx) => {
                                            const serialNumber = ((page - 1) * pageSize) + idx + 1;

                                            return (
                                                <tr key={item.id ?? `attendance-${idx}`} className={`border-b border-b-gray-200 last:border-b-0 cursor-pointer`}>
                                                    <td className={`px-4 py-5 z-10 text-center border-r border-gray-200 sticky shadow-sm top-0 left-0 bg-[#fffdf8]`}>
                                                        {serialNumber}
                                                    </td>
                                                    <td className="px-4 py-5">
                                                        <div className="min-w-48.5">
                                                            {item.fullname}
                                                        </div>
                                                    </td>
                                                <td className="px-4 py-5">
                                                    {item.email}
                                                </td>
                                                <td className="px-4 py-5 text-center">
                                                    {item.phone}
                                                </td>
                                                <td className="px-4 py-5 text-center">
                                                    <span className={`rounded-md px-2 py-1 ${item.will_attend ? 'text-green-500 bg-green-400/20' : 'text-red-500 bg-red-400/20'}`}>{item.will_attend ? 'Yes' : 'No'}</span>
                                                </td>
                                                <td className="px-4 py-5 text-center">
                                                    {item.family_category}
                                                </td>
                                                <td className="px-4 py-5">
                                                    <div className="text-wrap wrap-break-word min-w-37.5 max-w-50">
                                                        {item.message}
                                                    </div>
                                                </td>
                                                <td className="px-4 py-5 text-center">
                                                    {item.created_at.toDateString()}
                                                </td>
                                            </tr>
                                            )
                                        })
                                    }

                                    {
                                        attendees.length < 1 && (
                                            <tr>
                                                <td className="px-4 py-5 text-center" colSpan={8}>
                                                    {
                                                        page > pagination.totalPages ? "Wahala, water don pass garri! Check the page value in the URL.": 'No attendees yet!'
                                                    }
                                                </td>
                                            </tr>
                                        )
                                    }

                                </tbody>
                            </table>
                        </div>
                        <div className="flex justify-between items-center border border-gray-200 p-3 rounded-md">
                            <div className="text-sm">
                                Showing {pagination.page} of {pagination.totalPages} pages
                            </div>
                            <div className="flex items-center gap-3">
                                <Link href={page < 2 ? "#" : `?page=${page - 1}`} className={`bg-white border border-gray-200 text-gray-500 rounded-md size-8 flex items-center justify-center ${page < 2 ? 'opacity-40 cursor-not-allowed': "opacity-100 cursor-pointer"}`}>
                                    <ChevronLeft size={18} color="currentColor" />
                                </Link>
                                {/* <input /> */}
                                <Link href={page >= pagination.totalPages ? "#" : `?page=${page + 1}`} className={`bg-white border border-gray-200 text-gray-500 rounded-md size-8 flex items-center justify-center ${page >= pagination.totalPages ? 'opacity-40 cursor-not-allowed': "opacity-100 cursor-pointer"}`} >
                                    <ChevronRight size={18} color="currentColor" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}