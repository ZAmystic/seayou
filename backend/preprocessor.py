import numpy as np
import tensorflow as tf
import cv2
import os

trainPath = "C:/Users/Jacks/Downloads/archive/train"
testPath = "C:/Users/Jacks/Downloads/archive/test"

folderList = os.listdir(trainPath)
folderList.sort()

print(folderList)

x_train = []
y_train = []

x_test = []
y_test = []

#Load the train data into arrays

for i, category in enumerate(folderList):
    files = os.listdir(trainPath + "/" + category)
    for file in files:
        print(category + "/" + file)
        img = cv2.imread(trainPath + "/" + category + "/{0}".format(file), 0)
        x_train.append(img)
        y_train.append(i) #Each folder will eb a number
print(len(x_train)) #28709 images in the training set

#Show the first image removed as it was just a test case to see if it worked
#img1 = x_train[0]
#cv2.imshow("Image", img1)
#cv2.waitKey(0) 

#Check the labels
print(y_train) 
print(len(y_train))

#Do the same for the test folder
folderList = os.listdir(testPath)
folderList.sort()

for i, category in enumerate(folderList):
    files = os.listdir(testPath + "/" + category)
    for file in files:
        print(category + "/" + file)
        img = cv2.imread(testPath + "/" + category + "/{0}".format(file), 0)
        x_test.append(img)
        y_test.append(i) #Each folder will be a number
print(len(x_test))

print("Test Data:")
print(len(x_test))
print(len(y_test))

#Convert data to numpy
x_train = np.array(x_train,"float32")
y_train = np.array(y_train,"float32")
x_test = np.array(x_test,"float32")
y_test = np.array(y_test,"float32")

print(x_train.shape)
print(x_train[0])

#2 Tasks
#Noramlise the data: 0 to 1
#Add another dimension to the data [208709[48,48,1] for the CNN to work

x_train = x_train / 255.0
x_test = x_test / 255.0

#reshape
numOfImages = x_train.shape[0]
X_train = x_train.reshape(numOfImages, 48, 48, 1)

print(X_train[0])
print(X_train.shape)

#The same process for Test Images
numOfImages = x_test.shape[0]
X_test = x_test.reshape(numOfImages, 48, 48, 1)
print(X_test.shape)

#Convert labels to categorical
from keras.utils import to_categorical
y_train = to_categorical(y_train, num_classes=7)
y_test = to_categorical(y_test, num_classes=7)

print("To categorical")
print(y_train)
print(y_train.shape)
print(y_train[0])