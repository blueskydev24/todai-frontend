import { useState } from "react";
import Accordion from "../accordion/accordion";
export default function Sidebar() {
    return (
        <section>
            <div className="p-2">
                <Accordion/>
                </div>
        </section>
    );
}