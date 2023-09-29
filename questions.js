
// q = question, a = answer(s), s = source 
window.questions = [
  { "s": "https://hackr.io/blog/data-science-interview-questions", "q": "Supervised learning is a type of machine learning where a function is inferred from labeled training data. ", "a": ["Yes", "No"] },
  { "s": "https://hackr.io/blog/data-science-interview-questions", "q": "The training data in a supervised machine learning contains of a set of training examples.", "a": ["Yes", "No"] },
  { "s": "https://hackr.io/blog/data-science-interview-questions", "q": "Decision Trees is a supervised machine learning algorithm.", "a": ["Yes", "No"] },
  { "s": "https://hackr.io/blog/data-science-interview-questions", "q": "K-nearest Neighbor is a supervised machine learning algorithm.", "a": ["Yes", "No"] },
  { "s": "https://hackr.io/blog/data-science-interview-questions", "q": "Support Vector Machine is a supervised machine learning algorithm.", "a": ["Yes", "No"] },
  { "s": "https://hackr.io/blog/data-science-interview-questions", "q": "Neural Networks are used only for supervised machine learning problems.", "a": ["No", "Yes"] },
  { "s": "https://hackr.io/blog/data-science-interview-questions", "q": "Clustering is a typical supervised machine learning task.", "a": ["No", "Yes"] },
  { "s": "https://hackr.io/blog/data-science-interview-questions", "q": "Regression algorithms are used on unsupervised problems.", "a": ["No", "Yes"] },
  { "s": "https://hackr.io/blog/data-science-interview-questions", "q": "Anomaly detection is a topic for unsupervised learning algorithms.", "a": ["Yes", "No"] },
  { "s": "https://hackr.io/blog/data-science-interview-questions", "q": "Unsupervised Learning is an alias for classification.", "a": ["No", "Yes"] },
  { "s": "https://hackr.io/blog/data-science-interview-questions", "q": "Supervised learning is an alias for classification and Regression.", "a": ["Yes", "No"] },
  { "s": "https://hackr.io/blog/data-science-interview-questions", "q": "Unsupervised Learning is used for dimension reduction.", "a": ["Yes", "No"] },
  { "s": "https://hackr.io/blog/data-science-interview-questions", "q": "Supervised learning can be used for density estimation.", "a": ["No", "Yes"] },
  { "s": "https://hackr.io/blog/data-science-interview-questions", "q": "What do you understand by the Selection Bias? Selection bias is typically associated with research that doesn\u2019t have a random selection of participants. It is a type of error that occurs when a researcher decides who is going to be studied.", "a": ["Yes", "No"] },
  { "s": "https://en.wikipedia.org/wiki/F-score", "q": "What is the best possible value of F-Score?", "a": ["1", "0", "+inf", "-inf"] },
  { "s": "https://en.wikipedia.org/wiki/F-score", "q": "What is the worst possible value of F-Score?", "a": ["0", "1", "+inf", "-inf"] },
  { "s": "https://en.wikipedia.org/wiki/False_positives_and_false_negatives#true_positive", "q": "A false positive is an error in binary classification in which a test result incorrectly indicates the presence of a condition such as a disease when the disease is not present.", "a": ["Yes", "No"] },
  { "s": "https://en.wikipedia.org/wiki/False_positives_and_false_negatives#true_positive", "q": "false negative is the error where the test result incorrectly indicates the absence of a condition when it is actually present.", "a": ["Yes", "No"] },
  { "s": "https://en.wikipedia.org/wiki/F-score", "q": "False negative is referenced as type 1 error", "a": ["No", "Yes"] },
  { "s": "https://en.wikipedia.org/wiki/F-score", "q": "False positive is referenced as type 1 error", "a": ["Yes", "No"] },
  { "s": "https://en.wikipedia.org/wiki/F-score", "q": "Given TP = True Positive; TN = True Negative, Pos = total positive, Neg = total Negative - Accuracy is defined as", "a": ["(TP + TN) / (Pos + Neg)", "(TP - TN) / (Pos + Neg)", "(TP + TN) / (Pos - Neg)", "(TP + TN) * (Pos + Neg)"] },
  { "s": "https://en.wikipedia.org/wiki/Correlation_coefficient", "q": "What is not an established correlation measure?", "a": ["PCR", "MCC", "PCC"] },
  { "s": "https://hackr.io/blog/data-science-interview-questions", "q": "Overfitting occurs when trying to fit a linear model to non-linear data.", "a": ["No", "Yes"] },
  { "s": "https://hackr.io/blog/data-science-interview-questions", "q": "What is the cited amount of time used for data cleaning in data analysis.", "a": ["80%", "20%", "40%", "60%"] },
  { "s": "https://hackr.io/blog/data-science-interview-questions", "q": "Data cleaning increases the accuracy of a machine learning model.", "a": ["Yes", "No"] },
  { "s": "https://hackr.io/blog/data-science-interview-questions", "q": "What is not deep learning framework?", "a": ["d3", "Caffee", "Chainer", "Tensorflow"] },
  { "s": "https://hackr.io/blog/data-science-interview-questions", "q": "What are Autoencoders? - Autoencoders are simplistic learning networks used for transforming inputs into outputs with minimum possible error.", "a": ["Yes", "No"] },
  { "s": "https://hackr.io/blog/data-science-interview-questions", "q": "What components do not belong to a GAN?", "a": ["Agent", "Generator", "Discriminator"] },
  { "s": "https://hackr.io/blog/data-science-interview-questions", "q": "The Discriminator in a GAN act as a recognizer for fake and unique (real) copies.", "a": ["Yes", "No"] },
  { "s": "https://hackr.io/blog/data-science-interview-questions", "q": "What is a dropout layer? - Dropout stand for dropping out the hidden and visible units of a network on a random basis. ", "a": ["Yes", "No"] },
  { "s": "https://hackr.io/blog/data-science-interview-questions", "q": "Dropout Layer prevents underfitting.", "a": ["No", "Yes"] },
  { "s": "https://hackr.io/blog/data-science-interview-questions", "q": "Batch Gradient Descent takes less time to converge compared to Stochastic Gradient Descent.", "a": ["No", "Yes"] },
  { "s": "https://hackr.io/blog/data-science-interview-questions", "q": "Batch Gradient Descent updates the weight slower comapred to Stochastic Gradient Descent.", "a": ["Yes", "No"] },
  { "s": "https://hackr.io/blog/data-science-interview-questions", "q": "Stochastic Gradient Descent takes less time to coverage compared to Batch Gradient Descent.", "a": ["Yes", "No"] },
  { "s": "https://hackr.io/blog/data-science-interview-questions", "q": "What is an Activation function? - An Activation function helps in introducing the linearity in the neural network.", "a": ["No", "Yes"] },
  { "s": "https://hackr.io/blog/data-science-interview-questions", "q": "What is the full form of LSTM?", "a": ["Long Short Term Memory", "Large Short Term Memory", "Long Short Term Mean", "Long Smart Term Memory"] },
  { "s": "https://hackr.io/blog/data-science-interview-questions", "q": "What is the full form of RNN?", "a": ["Recurrent Neural Networks", "Reflective Neural Networks", "Recursive Neural Networks", "Reverse Neural Networks"] },
  { "s": "https://towardsdatascience.com/understanding-cnn-convolutional-neural-network-69fd626ee7d4", "q": "What is the full form of CNN?", "a": ["Convolutional Neural Network", "Connected Neural Network", "Concurrent Neural Network", "Composed Neural Network"] },
  { "s": "https://hackr.io/blog/data-science-interview-questions", "q": "Epoch in Deep Learning represents one of the iterations over the entire dataset.", "a": ["Yes", "No"] },
  { "s": "https://towardsdatascience.com/machine-learning-fundamentals-via-linear-regression-41a5d11f5220", "q": "What is a cost function? - A cost function is a measure of how wrong the model is in terms of its ability to estimate the relationship between X and y.", "a": ["Yes", "No"] },
  { "s": "https://hackr.io/blog/data-science-interview-questions", "q": "Bagging adjusts the weight of the observation and thereby classifies the population in different sets before the outcome prediction is made.", "a": ["No", "Yes"] },
  { "s": "https://hackr.io/blog/data-science-interview-questions", "q": "Boosting implements simple learners on one small population and takes mean for estimation purposes.", "a": ["No", "Yes"] },
  { "s": "https://www.analyticssteps.com/blogs/introduction-logistic-regression-sigmoid-function-code-explanation", "q": "Linear Regression is used when our dependent variable is ___", "a": ["continuous", "binary"] },
  { "s": "https://www.simplilearn.com/tutorials/data-science-tutorial/data-science-interview-questions", "q": "k folds cross-validation helps to avoid ___", "a": ["overfitting", "underfitting"] },
  { "s": "https://www.analyticssteps.com/blogs/introduction-logistic-regression-sigmoid-function-code-explanation", "q": "Linear regression uses the ordinary least square method to minimize the error.", "a": ["Yes", "No"] },
  { "s": "https://www.analyticssteps.com/blogs/introduction-logistic-regression-sigmoid-function-code-explanation", "q": "Logistic regression achieves the best outcomes by using the minimum likelihood method.", "a": ["No", "Yes"] },
  { "s": "https://www.simplilearn.com/tutorials/data-science-tutorial/data-science-interview-questions", "q": "Given a small dataset with a feature containing missing values, its valid to impute them using mean or median.", "a": ["Yes", "No"] },
  { "s": "https://www.simplilearn.com/tutorials/data-science-tutorial/data-science-interview-questions", "q": "Given v1 = [1,3] and v2 = [2,5] - how big is the euclidian distance?", "a": ["2,24", "3,12", "2,55", "1,51"] },
  { "s": "https://www.simplilearn.com/tutorials/data-science-tutorial/data-science-interview-questions", "q": "Content-based Filtering is related to recommendation systems.", "a": ["Yes", "No"] },
  { "s": "https://www.simplilearn.com/tutorials/data-science-tutorial/data-science-interview-questions", "q": "Collaborative Filtering is related to recommendation systems.", "a": ["Yes", "No"] },
  { "s": "https://www.simplilearn.com/tutorials/data-science-tutorial/data-science-interview-questions", "q": "At what p-value is the null hypothesis not rejected?", "a": ["p-value typically > 0.05", "p-value typically < 0.05", "p-value typically == 0.05"] },
  { "s": "https://www.simplilearn.com/tutorials/data-science-tutorial/data-science-interview-questions", "q": "In an imbalanced dataset, accuracy should be used as a measure of performance.", "a": ["No", "Yes"] },
  { "s": "https://www.simplilearn.com/tutorials/data-science-tutorial/data-science-interview-questions", "q": "Which of the following machine learning algorithms can be used for imputing missing values of both categorical and continuous variables?", "a": ["K-NN (k-nearest neighbor)", "Linear regression", "Decision trees", "K-means clustering"] },
  { "s": "https://www.simplilearn.com/tutorials/data-science-tutorial/data-science-interview-questions", "q": "Given following target vector: [0, 0, 0, 1, 1, 1, 1, 1] - what is the entropy?", "a": ["-(5/8 log(5/8) + 3/8 log(3/8))", "5/8 log(5/8) + 3/8 log(3/8)", "3/8 log(5/8) + 5/8 log(3/8)", "5/8 log(3/8) \u2013 3/8 log(5/8)"] },
  { "s": "https://www.simplilearn.com/tutorials/data-science-tutorial/data-science-interview-questions", "q": "What is selection bias - Selection bias, in general, is a problematic situation in which error is introduced due to a non-random population sample.", "a": ["Yes", "No"] },
  { "s": "https://towardsdatascience.com/over-100-data-scientist-interview-questions-and-answers-c5a66186769a", "q": "Oversampling the minority class in a unbalanced dataset is a valid approach.", "a": ["Yes", "No"] },
  { "s": "https://towardsdatascience.com/over-100-data-scientist-interview-questions-and-answers-c5a66186769a", "q": "Undersampling the majority class in a unbalanced dataset is a valid approach.", "a": ["Yes", "No"] },
  { "s": "https://towardsdatascience.com/over-100-data-scientist-interview-questions-and-answers-c5a66186769a", "q": "L2 Regularization, also called lasso, minimizes the sum of the squared.", "a": ["No", "Yes"] },
  { "s": "https://towardsdatascience.com/over-100-data-scientist-interview-questions-and-answers-c5a66186769a", "q": "Lasso regression is equal to L1 regularization.", "a": ["Yes", "No"] },
  { "s": "https://towardsdatascience.com/over-100-data-scientist-interview-questions-and-answers-c5a66186769a", "q": "A false negative is an incorrect identification of the absence of a condition when it\u2019s actually present.", "a": ["Yes", "No"] },
  { "s": "https://towardsdatascience.com/over-100-data-scientist-interview-questions-and-answers-c5a66186769a", "q": "A false positive is an incorrect identification of the presence of a condition when it\u2019s absent.", "a": ["Yes", "No"] },
  { "s": "https://towardsdatascience.com/over-100-data-scientist-interview-questions-and-answers-c5a66186769a", "q": "What does NLP stand for?", "a": ["Natural Language Processing", "Normalized Language Processing", "Neutral Language Processing"] },
  { "s": "https://towardsdatascience.com/over-100-data-scientist-interview-questions-and-answers-c5a66186769a", "q": "Random forests allow you to determine the feature importance.", "a": ["Yes", "No"] },
  { "s": "https://towardsdatascience.com/over-100-data-scientist-interview-questions-and-answers-c5a66186769a", "q": "SVM is less scalable on multi classification problems and more memory intensive compared to Random Forest.", "a": ["Yes", "No"] },
  { "s": "https://towardsdatascience.com/over-100-data-scientist-interview-questions-and-answers-c5a66186769a", "q": "Dimension reduction ___ the time and storage space.", "a": ["reduces", "increase"] },
  { "s": "https://en.wikipedia.org/wiki/Curse_of_dimensionality#cite_note-Pattern_recog-4", "q": "A typical rule of thumb is that there should be at least ___ training examples for each dimension in the representation.", "a": ["5", "6", "4", "1"] },
  { "s": "https://towardsdatascience.com/over-100-data-scientist-interview-questions-and-answers-c5a66186769a", "q": "What is the full form of MSE?", "a": ["Mean Squared Error", "Mean Summed Error", "Max Squared Error"] },
  { "s": "https://towardsdatascience.com/over-100-data-scientist-interview-questions-and-answers-c5a66186769a", "q": "What is the full form of MAE?", "a": ["Mean Absolute Error", "Max Absolute Error", "Mean Absolute Entropy"] },
  { "s": "https://towardsdatascience.com/over-100-data-scientist-interview-questions-and-answers-c5a66186769a", "q": "The kernel trick is a method of using a linear classifier to solve a non-linear problem by transforming linearly inseparable data to linearly separable ones in a higher dimension.", "a": ["Yes", "No"] },
  { "s": "https://towardsdatascience.com/over-100-data-scientist-interview-questions-and-answers-c5a66186769a", "q": "A convex function is where a line drawn between any two points on the graph may intersect other points on the graph.", "a": ["No", "Yes"] },
  { "s": "https://towardsdatascience.com/over-100-data-scientist-interview-questions-and-answers-c5a66186769a", "q": "A convex function is one where a line drawn between any two points on the graph lies on or above the graph.", "a": ["Yes", "No"] },
  { "s": "https://towardsdatascience.com/over-100-data-scientist-interview-questions-and-answers-c5a66186769a", "q": "Correlation measures the relationship between two variables, range from -1 to 1.", "a": ["Yes", "No"] },
  { "s": "https://towardsdatascience.com/over-100-data-scientist-interview-questions-and-answers-c5a66186769a", "q": "Causation is when a first event appears to have caused a second event.", "a": ["Yes", "No"] },
  { "s": "https://towardsdatascience.com/over-100-data-scientist-interview-questions-and-answers-c5a66186769a", "q": "You can test for causation using hypothesis testing or A/B testing.", "a": ["Yes", "No"] },
  { "s": "https://www.guru99.com/data-science-interview-questions.html", "q": "What is not a name of a bias that can occur during sampling?", "a": ["Parent bias", "Selection bias", "Under coverage bias", "Survivorship bias"] },
  { "s": "https://juliacomputing.com/blog/2020/06/julia-spark/", "q": "What languages does Apache Spark officially not support?", "a": ["Julia", "R", "Java", "Python"] },
  { "s": "https://www.guru99.com/data-engineer-interview-questions.html", "q": "Data Science and Data Engineering are always related to each other.", "a": ["No", "Yes"] },
  { "s": "https://www.guru99.com/data-engineer-interview-questions.html", "q": "HDFS stands for Hadoop Distributed File System.", "a": ["Yes", "No"] },
  { "s": "https://www.guru99.com/data-engineer-interview-questions.html", "q": "YARN stands for Yes Another Resource Negotiator.", "a": ["No", "Yes"] },
  { "s": "https://en.wikipedia.org/wiki/FIFO_(computing_and_electronics)", "q": "What is \"FIFO\"?", "a": ["First In First Out", "Fast In Fast Out", "Forward In Forward Out", "First In Forward Out"] },
  {
    "s": "https://doc.rust-lang.org/book/",
    "q": "Is Rust a statically-typed language?",
    "a": ["Yes", "No"]
  },
  {
    "s": "https://doc.rust-lang.org/std/vec/struct.Vec.html",
    "q": "In Rust, is Vec a dynamically-sized array?",
    "a": ["Yes", "No"]
  },
  {
    "s": "https://doc.rust-lang.org/rust-by-example/error/result.html",
    "q": "Does Rust have a built-in Result type for error handling?",
    "a": ["Yes", "No"]
  },
  {
    "s": "https://doc.rust-lang.org/book/ch03-01-variables-and-mutability.html",
    "q": "Are variables in Rust immutable by default?",
    "a": ["Yes", "No"]
  },
  {
    "s": "https://doc.rust-lang.org/book/ch10-03-lifetime-syntax.html",
    "q": "Does Rust require explicit lifetime annotations for all references?",
    "a": ["No", "Yes"]
  },
  {
    "s": "https://doc.rust-lang.org/book/ch07-02-modules-and-use-to-control-scope-and-privacy.html",
    "q": "Can you use modules in Rust to manage code privacy?",
    "a": ["Yes", "No"]
  },
  {
    "s": "https://doc.rust-lang.org/stable/reference/macros-by-example.html",
    "q": "Does Rust support macros?",
    "a": ["Yes", "No"]
  },
  {
    "s": "https://doc.rust-lang.org/book/ch15-00-smart-pointers.html",
    "q": "Does Rust have garbage collection?",
    "a": ["No", "Yes"]
  },
  {
    "s": "https://doc.rust-lang.org/std/primitive.str.html",
    "q": "In Rust, is a string slice represented as str?",
    "a": ["Yes", "No"]
  },
  {
    "s": "https://doc.rust-lang.org/book/ch05-01-defining-structs.html",
    "q": "Does Rust allow creating structs without named fields?",
    "a": ["Yes", "No"]
  },
  {
    "s": "https://doc.rust-lang.org/book/ch11-01-writing-tests.html",
    "q": "Is the test framework built into Rust?",
    "a": ["Yes", "No"]
  },
  {
    "s": "https://doc.rust-lang.org/cargo/",
    "q": "Is Cargo the default package manager for Rust?",
    "a": ["Yes", "No"]
  },
  {
    "s": "https://doc.rust-lang.org/std/panic/",
    "q": "In Rust, does the panic! macro stop the execution of the current thread?",
    "a": ["Yes", "No"]
  },
  {
    "s": "https://doc.rust-lang.org/std/option/",
    "q": "Is the Option<T> type in Rust used for nullable values?",
    "a": ["Yes", "No"]
  },
  {
    "s": "https://doc.rust-lang.org/book/ch18-03-pattern-syntax.html",
    "q": "Does Rust support pattern matching?",
    "a": ["Yes", "No"]
  },
  {
    "s": "https://doc.rust-lang.org/stable/reference/tokens.html",
    "q": "In Rust, are semicolons optional for single-expression functions?",
    "a": ["Yes", "No"]
  },
  {
    "s": "https://doc.rust-lang.org/book/ch13-01-closures.html",
    "q": "Does Rust support closures?",
    "a": ["Yes", "No"]
  },
  {
    "s": "https://doc.rust-lang.org/book/ch19-01-unsafe-rust.html",
    "q": "Is it possible to write unsafe code in Rust?",
    "a": ["Yes", "No"]
  },
  {
    "s": "https://doc.rust-lang.org/std/marker/trait.Copy.html",
    "q": "Does Rust automatically copy all types?",
    "a": ["No", "Yes"]
  },
  {
    "s": "https://doc.rust-lang.org/book/ch03-05-control-flow.html",
    "q": "Does Rust have a ternary conditional operator like 'x ? y : z'?",
    "a": ["No", "Yes"]
  },
  { "s": "https://doc.rust-lang.org/book/ch03-01-variables-and-mutability.html", "q": "By default, variables in Rust are immutable.", "a": ["True", "False"] },
  { "s": "https://doc.rust-lang.org/book/ch07-02-modules-and-use-to-control-scope-and-privacy.html", "q": "In Rust, the 'use' keyword is used for dependency injection.", "a": ["False", "True"] },
  { "s": "https://doc.rust-lang.org/book/ch10-02-traits.html", "q": "In Rust, traits are used to define shared behavior.", "a": ["True", "False"] },
  { "s": "https://doc.rust-lang.org/book/ch03-03-how-functions-work.html", "q": "Functions in Rust return the last expression automatically if there is no semicolon.", "a": ["True", "False"] },
  { "s": "https://doc.rust-lang.org/book/ch04-01-what-is-ownership.html", "q": "In Rust, ownership is transferred when variables are copied.", "a": ["False", "True"] },
  { "s": "https://doc.rust-lang.org/book/ch05-01-defining-structs.html", "q": "In Rust, structs can implement methods.", "a": ["True", "False"] },
  { "s": "https://doc.rust-lang.org/std/option/enum.Option.html", "q": "In Rust, the Option<T> enum has variants 'Some' and 'Any'.", "a": ["False", "True"] },
  { "s": "https://doc.rust-lang.org/book/ch19-06-macros.html", "q": "In Rust, macros are used to write code that writes other code.", "a": ["True", "False"] },
  { "s": "https://doc.rust-lang.org/book/ch16-01-threads.html", "q": "Rust's standard library provides native threads.", "a": ["True", "False"] },
  { "s": "https://doc.rust-lang.org/book/ch08-02-strings.html", "q": "In Rust, String is a growable, UTF-8 encoded bit of text.", "a": ["True", "False"] },
  { "s": "https://doc.rust-lang.org/std/vec/struct.Vec.html", "q": "Vec<T> in Rust is implemented as a stack.", "a": ["True", "False"] },
  { "s": "https://doc.rust-lang.org/book/ch09-02-recoverable-errors-with-result.html", "q": "The Result enum in Rust is primarily used for error handling.", "a": ["True", "False"] },
  { "s": "https://doc.rust-lang.org/book/ch06-01-defining-an-enum.html", "q": "Enums in Rust can have methods.", "a": ["True", "False"] },
  { "s": "https://doc.rust-lang.org/book/ch13-01-closures.html", "q": "Closures in Rust capture their environment by default.", "a": ["True", "False"] },
  { "s": "https://doc.rust-lang.org/book/ch19-01-unsafe-rust.html", "q": "In Rust, the 'unsafe' keyword allows operations that would usually be disallowed by Rust's safety guarantees.", "a": ["True", "False"] },
  { "s": "https://doc.rust-lang.org/book/ch15-02-deref.html", "q": "In Rust, the Deref trait allows implementing custom dereference behavior.", "a": ["True", "False"] },
  { "s": "https://doc.rust-lang.org/book/ch14-04-installing-binaries.html", "q": "Cargo is the built-in package manager for Rust.", "a": ["True", "False"] },
  { "s": "https://doc.rust-lang.org/book/ch11-01-writing-tests.html", "q": "In Rust, unit tests go in a separate file by convention.", "a": ["False", "True"] },
  { "s": "https://doc.rust-lang.org/book/ch05-02-example-structs.html", "q": "Tuple structs in Rust have field names.", "a": ["False", "True"] },
  { "s": "https://doc.rust-lang.org/book/ch18-01-all-the-places-for-patterns.html", "q": "Pattern matching is supported in Rust.", "a": ["True", "False"] },
  { "s": "https://crates.io/crates/serde", "q": "Serde is primarily used for data serialization and deserialization.", "a": ["True", "False"] },
  { "s": "https://crates.io/crates/reqwest", "q": "Reqwest is a crate used for making HTTP requests.", "a": ["True", "False"] },
  { "s": "https://crates.io/crates/tokio", "q": "Tokio is a crate used for asynchronous runtime for networking and other I/O operations.", "a": ["True", "False"] },
  { "s": "https://crates.io/crates/actix-web", "q": "Actix-web is a crate for web server development.", "a": ["True", "False"] },
  { "s": "https://crates.io/crates/regex", "q": "The regex crate is used for handling XML parsing.", "a": ["False", "True"] },
  { "s": "https://crates.io/crates/rayon", "q": "Rayon is a data-parallelism library for Rust.", "a": ["True", "False"] },
  { "s": "https://crates.io/crates/clap", "q": "Clap is a crate for command-line argument parsing.", "a": ["True", "False"] },
  { "s": "https://crates.io/crates/warp", "q": "Warp is a micro web framework that focuses on type safety.", "a": ["True", "False"] },
  { "s": "https://crates.io/crates/hyper", "q": "Hyper is a crate designed for high-level network programming.", "a": ["False", "True"] },
  { "s": "https://crates.io/crates/diesel", "q": "Diesel is an Object-Relational Mapping (ORM) crate.", "a": ["True", "False"] },


]
