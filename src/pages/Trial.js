
import React from 'react';

const CropRecommendation = () => {
    return (
        <div className="container max-w-[400px] mx-auto my-10 p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-center text-xl font-bold mb-6">Crop Recommendation</h1>
            <form id="locationForm" className="mb-6">
                <label htmlFor="locationInput" className="block mb-2">Enter Location:</label>
                <input
                    type="text"
                    id="locationInput"
                    name="location"
                    required
                    className="w-[20%] py-2 px-3 mb-4 border border-gray-300 rounded-md"
                />
                <button
                    type="submit"
                    id="submitButton"
                    className="center w-[20%] py-2 mt-14 px-4 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-500"
                >
                    Submit
                </button>
            </form>
            <div id="result" className="p-4 bg-gray-200 rounded-md"></div>
        </div>
    );
};

export default CropRecommendation;
