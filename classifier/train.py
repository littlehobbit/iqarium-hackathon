import pandas as pd
import re
from nltk.stem import WordNetLemmatizer
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.feature_extraction.text import TfidfTransformer
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.naive_bayes import MultinomialNB
from sklearn.pipeline import Pipeline
from sklearn import *
import pickle
from stop_words import get_stop_words


ru_stops = get_stop_words('ru')


dataset = pd.read_csv('./dataset_simple.csv')
    
reviews = dataset['Review']
classifications = dataset[dataset.columns[2:]].to_numpy()
titles = dataset.columns[2:]


def load_model():
    with open('model', 'rb') as training_model:
        model = pickle.load(training_model)

    return model

def convert_text(text):
    text = re.sub(r'\W', ' ', text)

    # remove all single characters
    text = re.sub(r'\s+[a-zA-Zа-яА-Я]\s+', ' ', text)

    # Remove single characters from the start
    text = re.sub(r'\^[a-zA-Zа-яА-Я]\s+', ' ', text) 

    # Substituting multiple spaces with single space
    text = re.sub(r'\s+', ' ', text, flags=re.I)
    text = re.sub(r'^b\s+', '', text)
    text = text.lower()

    return text


def train() -> None:
    converted = [convert_text(text) for text in reviews]
    X_train, X_test, y_train, y_test = train_test_split(converted, classifications, test_size=0.1, random_state=0)

    text_clf = Pipeline([
            ('vect', CountVectorizer(stop_words=ru_stops)),
            ('tfidf', TfidfTransformer()),
            ('clf', RandomForestClassifier())
    ])

    text_clf.fit(X_train, y_train)

    with open('model', 'wb') as picklefile:
        pickle.dump(text_clf, picklefile)
        

    print(X_test)
    print(text_clf.predict(X_test))
    
if __name__ == '__main__':
    train()