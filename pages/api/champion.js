import champions from './../../public/assets/champions_en.json'

export default function handler(req, res) {

    const search = req.body.search;
    const championList = Object.entries(champions.data);
    if (req.body.length == 0)
        res.status(400).json({ success: false, result: "Search not found" })
    res.status(200).json({
        success: true, result: championList.filter((item) => item[0].toLowerCase() === search.toLowerCase())
    })
}


