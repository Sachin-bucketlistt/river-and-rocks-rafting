import React from "react";
import { motion } from "framer-motion";
import ActivityCard from "../../CommonComponents/ActivitiesCards/ActivitiesCards";
import ActivitiesCardsData from "./ActivitiesCardsData";
import "./ActivitiesCards.css";

const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.12,
        },
    },
};

const ActivitiesCards = ({ data = ActivitiesCardsData }) => {
    return (
        <section id="ActivitiesCards">
            <div className="MaxWidthContainer MarginAuto SectionTopBottom">

                <motion.div
                    className="activities-header"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <h2>Our Activities</h2>
                    <p>Choose your adventure — every experience is crafted for the water.</p>
                </motion.div>

                <motion.div
                    className="activities-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {data.map((item) => (
                        <ActivityCard
                            key={item.id}
                            title={item.title}
                            description={item.description}
                            price={item.price}
                            image={item.image}
                            colors={item.colors || []}
                            onBook={() => console.log(`Book: ${item.title}`)}
                        />
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default ActivitiesCards;
