import React from "react"
import useFetch from "../hooks/useFetch.js";

const Products = () => {
    const {data,loading,error} = useFetch("https://api.escuelajs.co/api/v1/products");
    
    return (
        <div className="min-h-screen bg-black text-white px-6 py-12">
            {loading && (
                <div className="text-center text-3xl mt-60">Loading....</div>
            )}
            
            {error && (
                <div className="text-center text-red-500 text-3xl mt-60">Error:{error}</div>
            )}
            
            {!loading && !error && (
                <>
                    <h1 className="text-3xl text-center font-bold">Photos</h1>
                    <div className="grid grid-cols-4 gap-6 mt-10">
                        {data && data.slice(0, 75).map((product) => {
                            return (
                                <div key={product.id} className="text-center">
                                    <div className="border-2 border-white px-12 py-6 mb-4">
                                        <img
                                            src={product.images?.[0]}
                                            alt={product.title}
                                            className="w-full h-60 object-cover"
                                        />
                                        <h4 className="text-nowrap overflow-hidden">{product.title}</h4>
                                    </div>
                                </div>
                            )
                            
                        })}
                    </div>
                </>
            )}
        </div>
    )
}

export default Products;