import { useNavigate } from "react-router";
import { useRef, useState, useEffect } from "react";
import StyledButton from "../../Base/StyledButton/StyledButton";

const AdminNewForm = () => {
    const formRef = useRef();
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [slug, setSlug] = useState("");

    useEffect(() => {
        const generatedSlug = name.toLowerCase().replace(/\s+/g, "-");
        setSlug(generatedSlug);
    }, [name]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        // formRef.current.slug.value = slug;
        const formData = new FormData(formRef.current);

        const data = {
            name: formData.get("name"),
            brand: formData.get("brand"),
            description: formData.get("description"),
            image: formData.get("image"),
            price: `${formData.get("price")} SEK`,
            type: formData.get("type"),
            sku: formData.get("sku").toUpperCase(),
            slug: slug,
        };

        try {
            const response = await fetch("/api/products", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                const errorData = await response.text();
                throw new Error(errorData);
            }

            navigate("/admin/products");
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("An error occurred while submitting the form. Please try again later.");
        }
    };

    return (
        <>
            <form ref={formRef} className="flex flex-col m-4 space-y-4" onSubmit={handleSubmit}>
                <div className="flex flex-col">
                    <label htmlFor="name" className="mb-2 font-semibold">Namn</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Skriv här..."
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="p-2 border rounded"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="brand" className="mb-2 font-semibold">Märke</label>
                    <input
                        type="text"
                        name="brand"
                        id="brand"
                        placeholder="Skriv här..."
                        required
                        className="p-2 border rounded"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="description" className="mb-2 font-semibold">Beskrivning</label>
                    <textarea
                        name="description"
                        id="description"
                        placeholder="Skriv här..."
                        required
                        className="p-2 border rounded h-32 resize-none"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="type" className="mb-2 font-semibold">Typ</label>
                    <select
                        name="type"
                        id="type"
                        required
                        className="p-2 border rounded"
                    >
                        <option value="">Välj typ</option>
                        <option value="T-shirt">T-shirt</option>
                        <option value="Shirt">Shirt</option>
                        <option value="Hoodie">Hoodie</option>
                        <option value="Jacket">Jacket</option>
                        <option value="Shorts">Shorts</option>
                        <option value="Jeans">Jeans</option>
                        <option value="Pants">Pants</option>
                    </select>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="image" className="mb-2 font-semibold">Bild</label>
                    <input
                        type="text"
                        name="image"
                        id="image"
                        placeholder="URL här..."
                        required
                        className="p-2 border rounded"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="price" className="mb-2 font-semibold">Pris</label>
                    <input
                        type="number"
                        name="price"
                        id="price"
                        min="0"
                        placeholder="SEK"
                        required
                        className="p-2 border rounded"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="sku" className="mb-2 font-semibold">SKU</label>
                    <input
                        type="text"
                        name="sku"
                        id="sku"
                        pattern="[A-Za-z]{3}-[A-Za-z]{3}-\d{3}"
                        placeholder="AAA-BBB-111..."
                        className="p-2 border rounded uppercase"
                        required
                    />
                </div>
                {/* Hidden input field for the slug, which is generated from the name field */}
                <input type="hidden" name="slug" value={slug} />
                <StyledButton buttonText="Lägg till" type="submit" />
            </form>
        </>
    );
};

export default AdminNewForm;