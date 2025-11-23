"use client";

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
    icon: ReactNode;
    title: string;
    description: string;
    className?: string;
    index?: number;
}

export default function FeatureCard({ icon, title, description, className = '', index = 0 }: FeatureCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, borderColor: "rgba(255, 255, 255, 0.2)" }}
            className={`p-6 rounded-2xl bg-zinc-900/50 border border-white/5 transition-colors ${className}`}
        >
            <div className="h-12 w-12 rounded-lg bg-white/5 flex items-center justify-center mb-4 text-white">
                {icon}
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
            <p className="text-zinc-400 leading-relaxed">{description}</p>
        </motion.div>
    );
}

