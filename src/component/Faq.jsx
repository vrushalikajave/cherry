import {
    Accordion,
    AccordionButton,
    AccordionItem,
    AccordionPanel,
    Box,
    Heading,
    HStack,
    Image,
    Stack,
    VStack,
  } from "@chakra-ui/react";
  import React from "react";
  import { AddIcon, MinusIcon } from "@chakra-ui/icons";
  
  const Faq = () => {
    return (
      <Stack bg="rgb(229,207,255)" >
        <HStack>
          <Box>
            <Image src={require("../images/pic.png")} alt="faqImage" />
          </Box>
          <Box>
            <VStack >
              <Box>
                <Heading fontSize="3xl">
                  Frequently Asked{" "}
                  <span style={{ color: "purple" }}>Questions</span>
                </Heading>
              </Box>
              <Box>
                <Accordion allowToggle>
                  <AccordionItem>
                    {({ isExpanded }) => (
                      <>
                        <h2>
                          <AccordionButton
                            _expanded={{ bg: "purple", color: "white" }}
                            bg="rgb(229,207,255)"
                            color="black"
                            border="1px solid teal"
                            borderRadius="0.6rem"
                          >
                            <Box as="span" flex="1" textAlign="left">
                              What is CherryLearn?
                            </Box>
                            {isExpanded ? (
                              <MinusIcon fontSize="12px" />
                            ) : (
                              <AddIcon fontSize="12px" />
                            )}
                          </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                          CherryLearn has thousands of interactive and interesting
                          activities in English and Kannada based on textbooks,
                          technology systems to complement modern education, mock
                          tests and useful quizzes and grammar to boost
                          confidence.
                        </AccordionPanel>
                      </>
                    )}
                  </AccordionItem>
                </Accordion>
              </Box>
              <Box>
                <Accordion allowToggle>
                  <AccordionItem>
                    {({ isExpanded }) => (
                      <>
                        <h2>
                          <AccordionButton
                            _expanded={{ bg: "purple", color: "white" }}
                            bg="rgb(229,207,255)"
                            color="black"
                            border="1px solid teal"
                            borderRadius="0.6rem"
                          >
                            <Box as="span" flex="1" textAlign="left">
                              How much does it cost annually to use CherryLearn?
                            </Box>
                            {isExpanded ? (
                              <MinusIcon fontSize="12px" />
                            ) : (
                              <AddIcon fontSize="12px" />
                            )}
                          </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                          CherryLearn has thousands of interactive and interesting
                          activities in English and Kannada based on textbooks,
                          technology systems to complement modern education, mock
                          tests and useful quizzes and grammar to boost
                          confidence.
                        </AccordionPanel>
                      </>
                    )}
                  </AccordionItem>
                </Accordion>
                <Box>
                  <Accordion allowToggle>
                    <AccordionItem>
                      {({ isExpanded }) => (
                        <>
                          <h2>
                            <AccordionButton
                              _expanded={{ bg: "purple", color: "white" }}
                              bg="rgb(229,207,255)"
                              color="black"
                              border="1px solid teal"
                              borderRadius="0.6rem"
                            >
                              <Box as="span" flex="1" textAlign="left">
                                Do children need their own mobile to use
                                CherryLearn?
                              </Box>
                              {isExpanded ? (
                                <MinusIcon fontSize="12px" />
                              ) : (
                                <AddIcon fontSize="12px" />
                              )}
                            </AccordionButton>
                          </h2>
                          <AccordionPanel pb={4}>
                            CherryLearn has thousands of interactive and
                            interesting activities in English and Kannada based on
                            textbooks, technology systems to complement modern
                            education, mock tests and useful quizzes and grammar
                            to boost confidence.
                          </AccordionPanel>
                        </>
                      )}
                    </AccordionItem>
                  </Accordion>
                  <Box>
                    <Accordion allowToggle>
                      <AccordionItem>
                        {({ isExpanded }) => (
                          <>
                            <h2>
                              <AccordionButton
                                _expanded={{ bg: "purple", color: "white" }}
                                bg="rgb(229,207,255)"
                                color="black"
                                border="1px solid teal"
                                borderRadius="0.6rem"
                              >
                                <Box as="span" flex="1" textAlign="left">
                                  Can CherryLearn be used on any mobile from the
                                  entered number?
                                </Box>
                                {isExpanded ? (
                                  <MinusIcon fontSize="12px" />
                                ) : (
                                  <AddIcon fontSize="12px" />
                                )}
                              </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                              CherryLearn has thousands of interactive and
                              interesting activities in English and Kannada based
                              on textbooks, technology systems to complement
                              modern education, mock tests and useful quizzes and
                              grammar to boost confidence.
                            </AccordionPanel>
                          </>
                        )}
                      </AccordionItem>
                    </Accordion>
                  </Box>
                </Box>
              </Box>
            </VStack>
          </Box>
        </HStack>
      </Stack>
    );
  };
  
  export default Faq;