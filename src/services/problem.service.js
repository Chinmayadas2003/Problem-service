const sanitizeMarkdownContent = require("../utils/markdownSanitizer");
// controller call service->repository layer
class ProblemService {
    constructor(problemRepository){
        this.problemRepository= problemRepository;
    }
    //markdown can contain html.script tags-malicious code
    async createProblem(problemData){
        try {
            //1.sanitize the markdown for description
            problemData.description =sanitizeMarkdownContent(problemData.description);
            console.log(problemData);
            const problem = await this.problemRepository.createProblem(problemData);

            console.log("Problem created", problem);
            return problem;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    async getProblem(problemId) {
        const problem = await this.problemRepository.getProblem(problemId);
        return problem;
    }

    async getAllProblems(){
        try {
            const problems = await this.problemRepository.getAllProblems();
            return problems;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    async deleteProblem(problemId) {
        const problem = await this.problemRepository.deleteProblem(problemId);
        return problem;
    }
}

module.exports = ProblemService;