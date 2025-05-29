import { motion } from "framer-motion"
import { fadeIn } from "../variants"
import { useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'

export const Contact = () => {

    interface Message {
        name: string;
        email: string;
        message: string;
    }

    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [savedMessages, setSavedMessages] = useState<Message[]>([]);

    const handleSendMessage = () => {
        const newMessage = {
            name,
            email,
            message
        };

        setSavedMessages([...savedMessages, newMessage]);

        setName('');
        setEmail('');
        setMessage('');

        const encodedMessage = encodeURIComponent(newMessage.email && newMessage.name && newMessage.message &&`From: ${newMessage.name}\n\n${newMessage.message}\n\natt, ${newMessage.email}.`);
        const whatsappUrl = `https://wa.me/5547989025148?text=${encodedMessage}`;

        window.open(whatsappUrl);
    };

    return (
        <div className="py-16 lg:py-8  lg:h-screen lg:flex lg:items-center btn" id="contact">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row">
                    <motion.div variants={fadeIn('right', 0.3)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.3 }} className="flex-1 flex items-center">
                        <div>
                            <h4 className="text-xl uppercase font-medium mb-2 tracking-wide">Entre em contato</h4>
                            <h2 className="text-[45px] lg-text-[90px] leading-none mb-12 text-neutral-600">Vamos trabalhar <br />juntos!</h2>
                        </div>
                    </motion.div>
                    <motion.form variants={fadeIn('right', 0.3)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.3 }} className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6">
                        <input className="bg-transparent border-b py-3 outline-none w-full focus:border-gray-600 transition-all" type="text" placeholder="Seu nome" value={name} onChange={(e) => setName(e.target.value)} />
                        <input className="bg-transparent border-b py-3 outline-none w-full focus:border-gray-600 transition-all" type="text" placeholder="Seu email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <textarea className="bg-transparent border-b py-12 outline-none w-full focus:border-gray-600 transition-all resize-none mb-12" placeholder="Sua mensagem" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                        <div className="text-center pt-4 animate-bounce">
                            <button className="px-6 py-3 w-60 btn2 rounded-full text-center" onClick={handleSendMessage}>
                                <div className="flex items-center justify-center gap-x-6">
                                    <FaWhatsapp color="green"/>
                                    Fale comigo!
                                </div>
                            </button>
                        </div>
                        {savedMessages.map((msg, index) => (
                            <div key={index}>
                                <p>Nome: {msg.name}</p>
                                <p>Email: {msg.email}</p>
                                <p>Mensagem: {msg.message}</p>
                                <hr />
                            </div>
                        ))}
                    </motion.form>
                </div>
            </div>
        </div>
    );
};