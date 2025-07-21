"use client"

import { SquareCheckBig } from "lucide-react";
import Xarrow from "react-xarrows";

export default function RolesAndResponsibility() {
    return (
        <section className="container m-auto px-4 py-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">
                Roles and Responsibilities
            </h2>

            <div className="grid md:grid-cols-2 grid-cols-1 max-w-7xl m-auto gap-8 items-start">
                
                {/* kGamify Box */}
                <div className="flex flex-col justify-start py-6 px-4 rounded-lg border border-orange-100 w-full max-w-md mx-auto">
                <h3 className="text-3xl text-center font-bold">kGamify</h3>
                <ul className="space-y-6 mt-6">
                    <li className="flex gap-4 items-center min-h-[64px]" id="kA">
                    <SquareCheckBig className="text-orange-500 h-6 w-6 flex-shrink-0" />
                    <span>Create and manage the championship.</span>
                    </li>
                    <li className="flex gap-4 items-center min-h-[64px]" id="kB">
                    <SquareCheckBig className="text-orange-500 h-6 w-6 flex-shrink-0" />
                    <span>Provide in-app advertising and promotion.</span>
                    </li>
                    <li className="flex gap-4 items-center min-h-[64px]" id="kC">
                    <SquareCheckBig className="text-orange-500 h-6 w-6 flex-shrink-0" />
                    <span>Track performance metrics and share reports with the partner brand.</span>
                    </li>
                </ul>
                </div>

                {/* Partner Brands Box */}
                <div className="flex flex-col justify-start py-6 px-4 rounded-lg border border-orange-100 w-full max-w-md mx-auto">
                <h3 className="text-3xl text-center font-bold">Partner Brands</h3>
                <ul className="space-y-6 mt-6">
                    <li className="flex gap-4 items-center min-h-[64px] ju" id="pA">
                    <SquareCheckBig className="text-orange-500 h-6 w-6 flex-shrink-0" />
                    <span>Offer agreed-upon discount or reward.</span>
                    </li>
                    <li className="flex gap-4 items-center min-h-[64px]" id="pB">
                    <SquareCheckBig className="text-orange-500 h-6 w-6 flex-shrink-0" />
                    <span>Ensure seamless reward redemption at physical stores or online.</span>
                    </li>
                    <li className="flex gap-4 items-center min-h-[64px]" id="pC">
                    <SquareCheckBig className="text-orange-500 h-6 w-6 flex-shrink-0" />
                    <span>Collaborate on marketing and promotion activities.</span>
                    </li>
                </ul>
                </div>

                {/* Xarrow Connections */}
                <div className="hidden md:block">
                <Xarrow start="pA" end="kA" tailShape="circle" headShape="circle" headSize={3} showTail={true} tailSize={3} lineColor="orange" headColor="orange" tailColor="orange"/>
                <Xarrow start="pB" end="kB" tailShape="circle" headShape="circle" headSize={3} showTail={true} tailSize={3} lineColor="orange" headColor="orange" tailColor="orange"/>
                <Xarrow start="pC" end="kC" tailShape="circle" headShape="circle" headSize={3} showTail={true} tailSize={3} lineColor="orange" headColor="orange" tailColor="orange"/>
                </div>
            </div>
            </section>
    );
}