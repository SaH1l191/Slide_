"use client";
import React, { useState } from "react";
import { toast } from "sonner";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "../../ui/animated-modal";
import Image from "next/image";
import { motion } from "framer-motion";
import Loader from "../loader/page";

export function AnimatedModalDemo() {
  const [businessName, setBusinessName] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const images = [
    "https://images.unsplash.com/photo-1517322048670-4fba75cbbb62?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1573790387438-4da905039392?q=80&w=3425&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!businessName || !file) {
      toast.error("Please provide all fields.");
      return;
    }
    setLoading(true);
  
    try {
      // Upload form data
      const formData = new FormData();
      formData.append("businessName", businessName);
      formData.append("file", file);
  
      const response = await fetch("/api/user/update-form-filled", {
        method: "POST",
      });
  
      if (!response.ok) throw new Error("Failed to update user status");
  
      toast.success("Form submitted successfully!");
    } catch (error) {
      console.error("Error updating form status:", error);
      toast.error("Failed to update form status.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex items-center justify-center">
      <Modal>
        <ModalTrigger className="bg-black dark:bg-white dark:text-black text-white flex justify-center group/modal-btn">
          <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
            Setup Your Business
          </span>
          <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
            ✨
          </div>
        </ModalTrigger>
        <ModalBody>
          <ModalContent>
            <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
              Discover the power of {" "}
              <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                Slide Automation
              </span>{" "}
              ✨
            </h4>

           
              <form onSubmit={handleFormSubmit} className="space-y-4 mt-8">
                <div>
                  <label htmlFor="business-name" className="block text-neutral-700 dark:text-neutral-300 text-sm">
                    Business Name
                  </label>
                  <input
                    id="business-name"
                    type="text"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    className="mt-2 block w-full px-4 py-2 border border-gray-300 dark:border-neutral-700 rounded-md text-sm"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="file-upload" className="block text-neutral-700 dark:text-neutral-300 text-sm">
                    Upload .txt File
                  </label>
                  <input
                    id="file-upload"
                    type="file"
                    accept=".txt"
                    onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
                    className="mt-2 block w-full px-4 py-2 border border-gray-300 dark:border-neutral-700 rounded-md text-sm"
                    required
                  />
                </div>

                <ModalFooter className="gap-4 mt-8">
                <Loader state={loading}>
                  <button type="button" className="px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28">
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28"
                  >
                    Submit
                  </button>
                  </Loader>
                </ModalFooter>
              </form>
           
          </ModalContent>
        </ModalBody>
      </Modal>
    </div>
  );
}