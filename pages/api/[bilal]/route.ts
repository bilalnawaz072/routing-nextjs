import { NextApiRequest, NextApiResponse } from "next";
export const dynamic= 'auto'

export default async function GET(req:NextApiRequest,res:NextApiResponse)
{

    const bilal = req.query.bilal;
    res.status(200).json({name: "iqbal"});
}