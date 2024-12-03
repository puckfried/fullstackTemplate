import OpenAI from "openai";
const openai = new OpenAI();


export async function chatController(req,res,next){
    
    const {messages} = req.body

    if (!messages) throw new Error("message missing")

    const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
            { role: "system", content: "You are a helpful assistant." },
            // {
            //     role: "user",
            //     content: "Write a haiku about recursion in programming.",
            // },
            ...messages
        ],
    });
    
;

    res.json(completion.choices[0].message)
}