import numpy as np
import tensorflow as tf
import cv2
import os

print("Enter File Paths. Make sure to use '/' instead of '\\' in the path")
trainPath = input("Train Path: ")
testPath = input("Test Path: ")
modelFileName = input("Save Location: ") #eg.   D:/SeaYouModel/emotion.h5

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



#Build model:
#===========

input_shape = X_train.shape[1:]
print(input_shape)

from keras.models import Sequential
from keras.layers import Dense, Conv2D, MaxPooling2D, Flatten, Dropout
from keras.optimizers import Adam
from keras.callbacks import EarlyStopping
import matplotlib.pyplot as plt

model = Sequential()
model.add(Conv2D(input_shape=input_shape, filters=64, kernel_size=(3,3), padding="same", activation="relu"))
model.add(Conv2D(filters=64, kernel_size=(3,3), padding="same", activation="relu"))
model.add(MaxPooling2D(pool_size=(2,2), strides=(2,2)))

model.add(Conv2D(filters=128, kernel_size=(3,3), padding="same", activation="relu"))
model.add(Conv2D(filters=128, kernel_size=(3,3), padding="same", activation="relu"))
model.add(MaxPooling2D(pool_size=(2,2), strides=(2,2)))

model.add(Conv2D(filters=256, kernel_size=(3,3), padding="same", activation="relu"))
model.add(Conv2D(filters=256, kernel_size=(3,3), padding="same", activation="relu"))
model.add(Conv2D(filters=256, kernel_size=(3,3), padding="same", activation="relu"))
model.add(MaxPooling2D(pool_size=(2,2), strides=(2,2)))


model.add(Conv2D(filters=512, kernel_size=(3,3), padding="same", activation="relu"))
model.add(Conv2D(filters=512, kernel_size=(3,3), padding="same", activation="relu"))
model.add(Conv2D(filters=512, kernel_size=(3,3), padding="same", activation="relu"))
model.add(MaxPooling2D(pool_size=(2,2), strides=(2,2)))

model.add(Conv2D(filters=512, kernel_size=(3,3), padding="same", activation="relu"))
model.add(Conv2D(filters=512, kernel_size=(3,3), padding="same", activation="relu"))
model.add(Conv2D(filters=512, kernel_size=(3,3), padding="same", activation="relu"))
model.add(MaxPooling2D(pool_size=(2,2), strides=(2,2)))

model.add(Flatten())
model.add(Dense(4096, activation="relu"))
model.add(Dropout(0.5))
model.add(Dense(4096, activation="relu"))
model.add(Dense(7, activation="softmax"))

print(model.summary())

model.compile(optimizer=Adam(learning_rate=0.0001), loss='categorical_crossentropy', metrics=['accuracy'])

batch=32
epochs=30

stepsPerEpoch = np.ceil(len(X_train)/batch)
validationSteps = np.ceil(len(X_test)/batch)

stopEarly = EarlyStopping(monitor='val_accuracy', patience=5)

# train the model
history = model.fit(X_train,
                     y_train,
                     batch_size=batch,
                     epochs=epochs,
                     verbose=1,
                     validation_data=(X_test,y_test),
                     shuffle=True,
                     callbacks=[stopEarly])

# show the result based on pyplot

acc = history.history['accuracy']
val_acc = history.history['val_accuracy']
loss = history.history['loss']
val_loss = history.history['val_loss']

# show the charts
epochs = range(len(acc))

# show train and validation train chart

plt.plot(epochs, acc , 'r' , label="Train accuracy")
plt.plot(epochs, val_acc , 'b' , label="Validation accuracy")
plt.xlabel('Epoch')
plt.ylabel('Accuracy')
plt.title("Trainig and validation Accuracy")
plt.legend(loc='lower right')
plt.show()

# show loss and validation loss chart

plt.plot(epochs, loss , 'r' , label="Train loss")
plt.plot(epochs, val_loss , 'b' , label="Validation loss")
plt.xlabel('Epoch')
plt.ylabel('Loss')
plt.title("Trainig and validation Loss")
plt.legend(loc='upper right')
plt.show()

# save the model

model.save(modelFileName)