// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import MongoDQL from "mongo-dql";
const mongoDQL = new MongoDQL();

export default function RuleTranslate(req, res) {
  try {
    const rule = req.body.rule;
    if (rule === undefined) throw new Error("badrequest");
    const jsonRule = mongoDQL.parse(rule).where;
    res.status(200).json(jsonRule);
  } catch (e) {
    if (e.message === "badrequest")
      return res.status(400).json({ success: false, message: "Bad request" });
    res.status(200).json({ success: false, message: "Bad syntax" });
  }
}
