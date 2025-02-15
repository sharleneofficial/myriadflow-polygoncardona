"use client"
import React, {useState, useEffect} from "react";
import Link from "next/link";
import MostLovedCard from "../../components/mostLovedCard";
import Header1 from '../../components/header1'
import Footer from '../../components/footer'

const Page = () => {

    const [brands, setBrands] = useState([]);
	const [loading, setLoading] = useState(false);

	const getBrands = async () => {
		try {
			setLoading(true);

		  const baseUri = process.env.NEXT_PUBLIC_URI || 'https://app.myriadflow.com';
		//   localStorage.setItem("PloygonCardonaChain", "f0e4bdf6-2d6c-4c32-93d6-acf9ad5cdf44")
		//   const chaintype = localStorage.getItem("PloygonCardonaChain")
		  
		  const res = await fetch(`${baseUri}/collections/all`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
			});
	  
		  if (!res.ok) {
			throw new Error('Failed to fetch data');
		  }
	  
		  const result = await res.json();
	  
		  setBrands(result);
		  setLoading(false);

		  console.log("new database output", result, phyresult, collresult);
		} catch (error) {
		  console.error('Error fetching data:', error);
		  setLoading(false);
		}
	  };

	useEffect(() => {
		getBrands()
	}, [])

  return (
    <div>
        <div
				className=''
				style={{ zIndex: 10, position: 'fixed', left: 0, right: 0 }}
			>
				<Header1 />
			</div>

            <div style={{ textAlign: "center", paddingTop: '90px' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', width: '100vw', height: '100vh' }}>
			{brands
  .sort(() => Math.random() - 0.5) // Randomly shuffle the array
  .slice(0, 4) // Take the first 4 elements after shuffling
  .map((brand, index) => (
    <img
      key={index}
      src={`https://nftstorage.link/ipfs/${brand?.cover_image?.slice(7)}`}
      alt=""
      style={{
        flex: '1 0 50%',
        maxWidth: '50%',
        height: '50%',
        // objectFit: 'cover'
      }}
    />
  ))}
  </div>
</div>

      <div className="font-bold text-black text-4xl" style={{paddingLeft:'100px', paddingTop:'100px'}}>
      All Collections{" "}
      </div>

      <div className='mt-10 flex' style={{ gap: '20px', flexWrap: 'wrap', justifyContent:'center' }}>
        {brands?.map((nft, index) => (
        <MostLovedCard key={index} nft={nft} />
        ))}
        </div>

      <div className='pt-20'>
				<Footer />
			</div>

    </div>
  );
};

export default Page;