import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.naive_bayes import GaussianNB
from sklearn.tree import DecisionTreeClassifier
from sklearn.ensemble import VotingClassifier
from sklearn.metrics import accuracy_score
from sklearn.feature_extraction.text import CountVectorizer

import pickle

data = pd.read_csv('Blood Transfusion Service data.csv')
data = data.dropna()
X = data[['Recency', 'Frequency', 'Monetary', 'Time']]
y = data['Class(Target)']

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.5, random_state=42)


#scaler = StandardScaler()
#X_train = scaler.fit_transform(X_train)
#X_test = scaler.transform(X_test)

#cv = CountVectorizer()
#cv_train  = cv.fit_transform(X_train)
#cv_test = cv.transform(X_test)

naive_bayes = GaussianNB()
decision_tree = DecisionTreeClassifier(criterion='gini', max_depth=3, random_state=42)


hybrid_model = VotingClassifier(estimators=[('naive_bayes', naive_bayes), ('decision_tree', decision_tree)], voting='soft')


hybrid_model.fit(X_train, y_train)


y_pred = hybrid_model.predict(X_test)


accuracy = accuracy_score(y_test, y_pred)
print(f'Accuracy: {accuracy:.2f}')

pickle.dump(hybrid_model,open('Hybrid_classifier.pkl','wb'))

