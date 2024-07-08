// interview.js

class InterviewSimulator {
    constructor() {
        this.questions = [
            {
                question: "What type of government or civil service position are you most interested in pursuing?",
                source: "Interviewer Questions"
            },
            {
                question: "Could you briefly describe your relevant work experience?",
                source: "Interviewer Questions"
            },
            {
                question: "What's your highest level of education?",
                source: "Interviewer Questions"
            },
            {
                question: "Do you have any specific areas of expertise within government or civil service?",
                source: "Interviewer Questions"
            },
            {
                question: "Are you familiar with the department or agency you're applying to?",
                source: "Interviewer Questions"
            },
            {
                question: "What skills do you think are most important for success in this field?",
                source: "Interviewer Questions"
            },
            {
                question: "Are you willing to undergo a background check?",
                source: "Interviewer Questions"
            },
            {
                question: "Do you have any security clearances?",
                source: "Interviewer Questions"
            },
            {
                question: "Are you able to work in [specific location]?",
                source: "Interviewer Questions"
            },
            {
                question: "What's your availability for starting a new position?",
                source: "Interviewer Questions"
            },
            {
                question: "Are you a citizen of [country]? (This may be required for some positions)",
                source: "Interviewer Questions"
            },
            {
                question: "Do you have experience working with government systems or processes?",
                source: "Interviewer Questions"
            },
            {
                question: "How comfortable are you with public speaking or community engagement?",
                source: "Interviewer Questions"
            },
            {
                question: "Are you familiar with government procurement processes?",
                source: "Interviewer Questions"
            },
            {
                question: "What do you know about public policy development?",
                source: "Interviewer Questions"
            }
        ];
        this.currentQuestionIndex = 0;
        this.responses = [];
        console.log("intervewSimulation intitialized with", this.questions.length, "questions");
    }

    startInterview() {
        console.log("starting interview");
        return this.getNextQuestion();
    }

    getNextQuestion() {
        console.log("getting next question, current index:", this.currentQuestionIndex);
        if (this.currentQuestionIndex < this.questions.length) {
            const question = this.questions[this.currentQuestionIndex++].question;
            console.log("returning question:", question)
            return question;
        } else {
            console.log("no more questions, ending interview");
            return this.endInterview();
        }
    }

    processResponse(response) {
        this.responses.push(response);
        return this.generateFeedback(response);
    }

    generateFeedback(response) {
        // This is a simple feedback generator. In a real system, this would be more sophisticated.
        const feedbacks = [
            "Thank you for sharing that information.",
            "That's very interesting. Let's move on to the next question.",
            "I appreciate your detailed response.",
            "Thank you, that gives us a good understanding of your background.",
            "That's helpful to know. Let's continue with the next question."
        ];
        return feedbacks[Math.floor(Math.random() * feedbacks.length)];
    }

    endInterview() {
        return "Thank you for participating in this interview simulation. We've reached the end of our questions. In a real scenario, we would now review your responses and get back to you with next steps. Is there anything else you'd like to add or ask?";
    }

    getProgress() {
        return `Question ${this.currentQuestionIndex} of ${this.questions.length}`;
    }
}

// Export the class if using modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = InterviewSimulator;
}